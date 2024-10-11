import {Bike, UserProfile, brandStats, makeStats, bikeStats} from '../models/index.js';
import {DataStore} from '@aws-amplify/datastore';

export async function fetchUserProfile(setUserProfiles, setLocalUserProfiles, client) {
    try{
    const { data: profiles } = await client.models.UserProfile.list();
    //const user = await Auth.currentAuthenticatedUser();
    setUserProfiles(profiles);
    //console.log("profiles"+ JSON.stringify(profiles));
    //now check if it exists in the local UserProfile table 
    const localProfiles = await DataStore.query(UserProfile, c => c.userIdAMP.eq(profiles[0].id));
    if (localProfiles.length === 0) {
      // No profile found, create a new one
      //console.log("No profile found for user, creating new profile...");
      setLocalUserProfiles([await createNewUserProfile(profiles[0].id)]);
    } else {
      console.log("User profile found:", profiles);
      // Set profile data in state or handle it
      setLocalUserProfiles(localProfiles);
    }
  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
  }

  export async function createNewUserProfile(userIdAMPS) {
    try {
      const newUserProfile = await DataStore.save(
        new UserProfile({
          userIdAMP: userIdAMPS,
          bikesOwned: [],
          // Add other fields as necessary based on your model
        })
      );
      //console.log("New UserProfile created:", newUserProfile);
      return newUserProfile;
    } catch (error) {
      console.error("Error creating new user profile:", error);
    }
  }

  export async function fetchBikeModels(setBikeModels ) {
    try {
      //console.log(client.models);
    const bikesData = await DataStore.query(makeStats);
    //console.log("bike Models:"+ JSON.stringify(bikesData));
    setBikeModels(bikesData);
    }
    catch (err) {
      console.error('Error fetching bikes', err);
    }
  }

  export async function fetchUserBikes(setUserBikes, userprofiles, update, setUpdatePage) {
    let user;
    if(userprofiles.length===0){
      console.log("here");
      setUpdatePage(!update);
      return;
    }
    else{
      console.log("or here");
      user=userprofiles[0];
    try {
      //console.log(client.models);
    const bikesData = await DataStore.query(Bike, b => b.userId.eq(user.id));
    //console.log("BikeData"+JSON.stringify(bikesData));
    //sort by the bike number ascending so that we get the order in which owned
    const sortedBikes = bikesData.sort((a, b) => a.bikeNumber - b.bikeNumber);
    setUserBikes(sortedBikes);
    }
    catch (err) {
      console.error('Error fetching bikes', err);
    }
  }
  };

  export async function createNewBike(bikeData) {
    try {
      const newBike = await DataStore.save( new Bike(bikeData));
      //console.log('Bike created:', newBike);
      return true
    } catch (error) {
      console.error('Error creating Bike:', error);
      return false;
    }
  }

  export async function updateAllBikeStats(bikeData){
    try {
      //firstUpdateTheBrandStats
      updateBrandStats(bikeData);
      updateModelStats(bikeData);
      updateBikeStats(bikeData);
    }
    catch{

    }
  }

  async function updateBrandStats(bikeData) {
    // Query for existing brand stats
    const brands = await DataStore.query(brandStats, c => c.brandName.eq(bikeData.brand));
    
    let brandData;
    
    // Create new brand entry if the brand does not exist
    if (brands.length === 0) {
      brandData = {
        brandName: bikeData.brand,
        avgSatisScore: bikeData.score,
        totalNumBikes: 1, // Start counting from 1 for the first entry
        numFirstBike: 0,
        numSecondBike: 0,
        numThirdPlusBike: 0,
        numBroken: bikeData.broken ? 1 : 0, // Initialize based on current bike
        numSold: bikeData.sold ? 1 : 0, // Initialize based on current bike
        avgOwnership: bikeData.ownershipMonths,
      };
      
      // Save the new brand data
      try {
        await DataStore.save(new brandStats(brandData)); // Use the model constructor
        console.log("New brand data created successfully");
      } catch (error) {
        console.error("Error saving new brand data:", error);
      }
    } else {
      // If brand exists, update the existing entry
      brandData = brands[0];
  
      // Increment totalNumBikes
      brandData.totalNumBikes = brandData.totalNumBikes + 1;
  
      // Update avgSatisScore and avgOwnership
      brandData.avgSatisScore = (brandData.avgSatisScore + bikeData.score) / 2;
      brandData.avgOwnership = (brandData.avgOwnership + bikeData.ownershipMonths) / 2;
  
      // Increment broken and sold numbers
      if (bikeData.broken) {
        brandData.numBroken += 1;
      }
      if (bikeData.sold) {
        brandData.numSold += 1;
      }
  
      // Increment right bike number
      if (bikeData.bikeNumber === 1) {
        brandData.numFirstBike += 1;
      } else if (bikeData.bikeNumber === 2) {
        brandData.numSecondBike += 1;
      } else if (bikeData.bikeNumber >= 3) {
        brandData.numThirdPlusBike += 1;
      }
  
      // Now create a copy of the existing entry and save the updated data
      try {
        const updatedBrandData = brandStats.copyOf(brandData, updated => {
          updated.brandName = brandData.brandName;
          updated.totalNumBikes = brandData.totalNumBikes;
          updated.avgSatisScore = brandData.avgSatisScore;
          updated.avgOwnership = brandData.avgOwnership;
          updated.numBroken = brandData.numBroken;
          updated.numSold = brandData.numSold;
          updated.numFirstBike = brandData.numFirstBike;
          updated.numSecondBike = brandData.numSecondBike;
          updated.numThirdPlusBike = brandData.numThirdPlusBike;
        });
  
        await DataStore.save(updatedBrandData);
        console.log("Brand stats updated successfully");
      } catch (error) {
        console.error("Error updating brand data:", error);
      }
    }
  }
  
  async function updateModelStats(bikeData) {
    // Query for existing model stats
    const models = await DataStore.query(makeStats, c => c.modelName.eq(bikeData.model));
    
    let modelData;
    
    // Create new model entry if the model does not exist
    if (models.length === 0) {
      modelData = {
        modelName: bikeData.model,
        avgSatisScore: bikeData.score,
        totalNumBikes: 1, // Start counting from 1 for the first entry
        numFirstBike: 0,
        numSecondBike: 0,
        numThirdPlusBike: 0,
        numBroken: bikeData.broken ? 1 : 0, // Initialize based on current bike
        numSold: bikeData.sold ? 1 : 0, // Initialize based on current bike
        avgOwnership: bikeData.ownershipMonths,
      };
      
      // Save the new model data
      try {
        await DataStore.save(new makeStats(modelData)); // Use the model constructor
        console.log("New model data created successfully");
      } catch (error) {
        console.error("Error saving new model data:", error);
      }
    } else {
      // If model exists, update the existing entry
      modelData = models[0];
  
      // Increment totalNumBikes
      modelData.totalNumBikes += 1;
  
      // Update avgSatisScore and avgOwnership
      modelData.avgSatisScore = (modelData.avgSatisScore + modelData.score) / 2;
      modelData.avgOwnership = (modelData.avgOwnership + modelData.ownershipMonths) / 2;
  
      // Increment broken and sold numbers
      if (modelData.broken) {
        modelData.numBroken += 1;
      }
      if (modelData.sold) {
        modelData.numSold += 1;
      }
  
      // Increment right bike number
      if (modelData.bikeNumber === 1) {
        modelData.numFirstBike += 1;
      } else if (modelData.bikeNumber === 2) {
        modelData.numSecondBike += 1;
      } else if (modelData.bikeNumber >= 3) {
        modelData.numThirdPlusBike += 1;
      }
  
      // Now create a copy of the existing entry and save the updated data
      try {
        const updatedModelData = makeStats.copyOf(modelData, updated => {
          updated.modelName = modelData.modelName;
          updated.totalNumBikes = modelData.totalNumBikes;
          updated.avgSatisScore = modelData.avgSatisScore;
          updated.avgOwnership = modelData.avgOwnership;
          updated.numBroken = modelData.numBroken;
          updated.numSold = modelData.numSold;
          updated.numFirstBike = modelData.numFirstBike;
          updated.numSecondBike = modelData.numSecondBike;
          updated.numThirdPlusBike = modelData.numThirdPlusBike;
        });
  
        await DataStore.save(updatedModelData);
        console.log("Model stats updated successfully");
      } catch (error) {
        console.error("Error updating model data:", error);
      }
    }
  }

  async function updateBikeStats(bikeData) {
    // Query for existing model stats
    const first = await DataStore.query(bikeStats, c => c.modelName.eq(bikeData.model));
    let bikes = [];
    if(first.length !=0 ){
      bikes = await DataStore.query(bikeStats, c => c.modelName.eq(bikeData.model).eq(bikeData.bikeYear));
    }
    let pulledBikeData;
    
    // Create new bike entry if the bike does not exist
    if(bikes.length === 0) {
      pulledBikeData = {
        modelName: bikeData.model,
        bikeNum: 1, // Start counting from 1 for the first entry
        bikeYear: bikeData.year
      };
      
      // Save the new bike data
      try {
        await DataStore.save(new bikeStats(pulledBikeData)); // Use the bike constructor
        console.log("New bike data created successfully");
      } catch (error) {
        console.error("Error saving new bike data:", error);
      }
    } else {
      // If bike exists, update the existing entry
      pulledBikeData = bikes[0];
  
      // Increment totalNumBikes
      pulledBikeData.bikeNum += 1;
  
      // Now create a copy of the existing entry and save the updated data
      try {
        const updatedBikeData = bikeStats.copyOf(pulledBikeData, updated => {
          modelName = pulledbikeData.modelName;
          bikeYear = pulledBikeData.bikeYear;
          updated.bikeNum = pulledBikeData.bikeNum;
        });
  
        await DataStore.save(updatedBikeData);
        console.log("Bike stats updated successfully");
      } catch (error) {
        console.error("Error updating bike data:", error);
      }
    }
  }

  export async function syncDataStore() {
    try {
      // Fetch and sync data from the cloud
      await DataStore.start();
      console.log('DataStore synced successfully.');
    } catch (error) {
      console.error('Error syncing DataStore:', error);
    }
  }
