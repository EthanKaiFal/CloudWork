import {Bike, UserProfile, brandStats, makeStats, bikeStats} from '../models/index.js';
import {DataStore} from '@aws-amplify/datastore';

export async function fetchUserProfile(setUserProfiles, setLocalUserProfiles, client) {
    try{
    const { data: profiles } = await client.models.UserProfile.list();
    setUserProfiles(profiles);
    console.log("profiles"+ JSON.stringify(profiles));
    //now check if it exists in the local UserProfile table 
    const localProfiles = await DataStore.query(UserProfile, c => c.userIdAMP.eq(profiles[0].id));
    if (localProfiles.length === 0) {
      // No profile found, create a new one
      console.log("No profile found for user, creating new profile...");
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
      console.log("New UserProfile created:", newUserProfile);
      return newUserProfile;
    } catch (error) {
      console.error("Error creating new user profile:", error);
    }
  }

  export async function fetchUserBikes(setUserBikes) {
    try {
      //console.log(client.models);
    const bikesData = await DataStore.query(Bike);
    console.log("BikeData"+JSON.stringify(bikesData));
    //sort by the bike number ascending so that we get the order in which owned
    const sortedBikes = bikesData.sort((a, b) => a.bikeNumber - b.bikenumber);
    setUserBikes(sortedBikes);
    }
    catch (err) {
      console.error('Error fetching bikes', err);
    }
  };

  export async function createNewBike(bikeData) {
    try {
      const newBike = await DataStore.save( new Bike(bikeData));
      console.log('Bike created:', newBike);
      return true
    } catch (error) {
      console.error('Error creating Bike:', error);
      return false;
    }
  }

  export async function updateBikeStats(bikeData){
    try {
      //firstUpdateTheBrandStats
      updateBrandStats();
    }
    catch{

    }
  }

async function updateBrandStats(bikeData){
    

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