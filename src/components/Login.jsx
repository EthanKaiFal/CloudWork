import { useState, useEffect } from "react";
import {
  Button,
  Heading,
  Flex,
  View,
  Grid,
  Divider,
} from "@aws-amplify/ui-react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/data";
import outputs from "../../amplify_outputs.json";
import { bikesByUserId } from "../graphql/queries";
import {createBike} from "../graphql/mutations";
import './Login.css';
import {Bike, UserProfile} from '../models/index.js';
import {DataStore} from '@aws-amplify/datastore';



/**
 * @type {import('aws-amplify/data').Client<import('../../amplify/data/resource').Schema>}
 */

Amplify.configure(outputs);
const client = generateClient({
  authMode: "userPool",
});


export default function Login() {
  //querie calls
  const [userprofiles, setUserProfiles] = useState([]);
  const [localUserProfiles, setLocalUserProfiles] = useState([]);
  const [userBikes, setUserBikes] = useState([])
  const { signOut } = useAuthenticator((conp) => [conp.user]);
  //profile info inputs
  const [yearsRiding, setYearsRiding] = useState(0);
  const [bikeNumber, setBikeNumber] = useState(-1);
  const [bikeBrand, setBikeBrand] = useState('');
  const [bikeModel, setBikeModel] = useState('');
  const [bikeYear, setBikeYear] = useState(0);
  const [bikeSold, setBikeSold] = useState(false);
  const [bikeScore, setBikeScore] = useState(0.0);
  const [bikeBroken, setBikeBroken] = useState(false);
  const [monthsOwned, setMonthsOwned] = useState(0);
  //frontend status variable 
  const [addingNewBike, setaddingPage] = useState(false);
  const [update, setUpdatePage] = useState(false);

  //inputChangeHandlers
  const handleyearsRiding = (event) => {
    setYearsRiding(event.target.value);
  };
  const handleBikeNumber = (event) => {
    const value = parseInt(event.target.value, 10);
    setBikeNumber(value);
  }
  const handleBikeBrand = (event) => {
    setBikeBrand(event.target.value);
  };
  const handleBikeModel = (event) => {
    setBikeModel(event.target.value);
  };
  const handleBikeYear = (event) => {
    const value = parseInt(event.target.value);
    setBikeYear(value);
  };
  const handleBikeSold = (event) => {
    if(event.target.value === "Yes"){
    setBikeSold(true);
    }
    else{
      setBikeSold(false);
    }
  };
  const handleBikeScore = (event) => {
    const value = parseFloat(event.target.value);
    setBikeScore(value);
  };
  const handleBikeBroken = (event) => {
    if(event.target.value === "Yes"){
    setBikeBroken(true);
    }
    else{
      setBikeBroken(false);
    }
  };
  const handleMonthsOwned = (event) => {
    const value = parseInt(event.target.value,10);
    setMonthsOwned(value);

  }




//handler to set the status of the page to addign a new bike mode 
const handleAddBike = () => {
  setaddingPage(true);
}




//save button handler after a bike is added
const handleSaveBike = async (event) => {
  event.preventDefault();
  const myProfile = localUserProfiles[0];
  const bikeData = {
    bikeNumber: bikeNumber,
    brand: bikeBrand,
    model: bikeModel,
    year: bikeYear,
    sold: bikeSold,
    broken: bikeBroken,
    ownershipMonths: monthsOwned,
    score: bikeScore,
    userId: myProfile.id,
  }
  //push to backend
  const success = await createNewBike(bikeData);
  if(success){
    setBikeBrand('');
    setBikeBroken(false);
    setBikeModel('');
    setBikeNumber(-1);
    setBikeScore(0.0);
    setBikeSold(false);
    setBikeYear('');
    setMonthsOwned(0);
    setaddingPage(false);
    setUpdatePage(!update);
  }

}

async function handleRemove(bike){
  //do a call her that will remove the bike from the list of bikes owned by the owner
  await DataStore.delete(bike);
  setUpdatePage(!update);
}

syncDataStore();

//queries to the db
  useEffect(() => {
    //syncDataStore();
    fetchUserProfile();
    //saveUserProfileToDS();
    fetchUserBikes();
  }, [update]);


  async function fetchUserProfile() {
    try{
    const { data: profiles } = await client.models.UserProfile.list();
    setUserProfiles(profiles);
    console.log("profiles"+ JSON.stringify(profiles));
    //now check if it exists in the local UserProfile table 
    const localProfiles = await DataStore.query(UserProfile, c => c.userIdAMP.eq(profiles[0].id));
    if (localProfiles.length === 0) {
      // No profile found, create a new one
      console.log("No profile found for user, creating new profile...");
      setLocalUserProfiles([await createNewUserProfile(profiles[0].id, profiles[0].email )]);
    } else {
      console.log("User profile found:", profiles);
      // Set profile data in state or handle it
      setLocalUserProfiles(localProfiles);
    }
  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
  }

  // Function to create a new UserProfile in DynamoDB
async function createNewUserProfile(userIdAMPS, email) {
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

  async function fetchUserBikes() {
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

  async function createNewBike(bikeData) {
    try {
      const newBike = await DataStore.save( new Bike(bikeData));
      console.log('Bike created:', newBike);
      return true
    } catch (error) {
      console.error('Error creating Bike:', error);
      return false;
    }
  }

  async function syncDataStore() {
    try {
      // Fetch and sync data from the cloud
      await DataStore.start();
      console.log('DataStore synced successfully.');
    } catch (error) {
      console.error('Error syncing DataStore:', error);
    }
  }

  async function saveUserProfileToDS() {
    console.log("User Profile Data:"+ userprofiles);
    if (!userprofiles || !Array.isArray(userprofiles) || userprofiles.length === 0) {
      console.error("No user profiles found or userprofiles is not an array.");
      return;
    }
    try {
      // Use Promise.all to handle the array of promises returned by map
      const savedProfiles = await Promise.all(
        userprofiles.map(async (userProfileData) => {
          try {
            console.log("UserProfile Data2:", JSON.stringify(userProfileData, null, 2));

            const savedProfile = await DataStore.save(
              new UserProfile({
                id: userProfileData.id,
                userIdAMP: userProfileData.userIdAMP,
                bikesOwned: userProfileData.bikesOwned,
                // Add other fields as necessary based on your model
              })
            );
            console.log("UserProfile saved to DataStore:", savedProfile);
            return savedProfile;
          } catch (error) {
            console.error("Error saving to DataStore:", error);
          }
        })
      );
      
      // Optionally return or log the saved profiles
      return savedProfiles;
    } catch (error) {
      console.error("Error saving profiles to DataStore:", error);
    }
  }



//displaying html helper functions 
  const displayUserBikes = () => {
    //we want to first fetch all the bikes 
    return(
    <View>
      {userBikes.map((userBike) => (
        <View>
          <View>
            <p name="bikeDisplayLine">Bike Number: {userBike.bikeNumber}</p>
            <p name="bikeDisplayLine">Brand:{userBike.brand}</p>
            <p name="bikeDisplayLine">Model:{userBike.model}</p>
            <p name="bikeDisplayLine">Year:{userBike.year}</p>
            {userBike.broken ? <p name="bikeDisplayLine">Broken: Yes</p> : <p name="bikeDisplayLine">Broken: No</p>}
            {userBike.sold ? <p name="bikeDisplayLine">Sold: Yes</p> : <p name="bikeDisplayLine">Sold: No</p>}
            <p name="bikeDisplayLine">Months Owned: {userBike.ownershipMonths}</p>
            <p name="bikeDisplayLine">Bike Score: {userBike.score}</p>
          </View>
          <Button onClick={() =>handleRemove(userBike)}> Remove </Button>
        </View>
      ))}
    </View>
  )
  }

//this will display all the inputs to save a single new bike 
  const displayNewBikeInputForm = () => {
    
    return (
    <View>
      <View name="inputField">
        <p>What number bike is this?</p>
        <input 
        type="number" 
        value={bikeNumber} 
        onChange={handleBikeNumber} 
        placeholder="Type in your bike number" 
      />
      </View>
      <View name="inputField">
        <p>Brand:</p>
        <input 
        type="text" 
        value={bikeBrand} 
        onChange={handleBikeBrand} 
        placeholder="Type in your bike brand" 
      />
      </View>
      <View name="inputField">
        <p>Model:</p>
        <input 
        type="text" 
        value={bikeModel} 
        onChange={handleBikeModel} 
        placeholder="Type in your bike model" 
      />
      </View>  
      <View name="inputField">
        <p>Year:</p>
        <input 
        type="text" 
        value={bikeYear} 
        onChange={handleBikeYear} 
        placeholder="Type in your bike year" 
      />
      </View>   
      <View name="inputField">
        <p>Is this bike already sold?</p>
        <select value={bikeSold ? "Yes": "No"} onChange={handleBikeSold}>
          <option value="">Select...</option>{/*Placeholder*/}
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </View>
      <View name="inputField">
        <p>Has this bike been significantly broken before?</p>
        <select value={bikeBroken ? "Yes": "No"} onChange={handleBikeBroken}>
          <option value="">Select...</option>{/*Placeholder*/}
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </View>  
      <View name="inputField">
        <p>How many months have you owned this bike?</p>
        <input 
        type="number" 
        value={monthsOwned} 
        onChange={handleMonthsOwned} 
        step="1"
        placeholder=""
      />  
      </View>
      <View name="inputField">
        <p>From 1-10 how would rate your experience with this bike? Decimals like 8.8 are usable.</p>
        <input 
        type="number" 
        value={bikeScore} 
        onChange={handleBikeScore} 
        min="0.0"
        max="10.0"
        step="0.1"
        placeholder=""
      />  
      </View>

      <Button onClick={handleSaveBike}>Save Bike</Button>

    </View>
    )
  }

  return (
    <Flex
      className="App"
      justifyContent="center"
      alignItems="center"
      direction="column"
      width="70%"
      margin="0 auto"
    >
      <Heading level={1}>My Profile</Heading>

      <Divider />

      <Grid
        margin="3rem 0"
        autoFlow="column"
        justifyContent="center"
        gap="2rem"
        alignContent="center"
      >
        {userprofiles.map((userprofile) => (
          <Flex
            key={userprofile.id || userprofile.email}
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap="2rem"
            border="1px solid #ccc"
            padding="2rem"
            borderRadius="5%"
            className="box"
          >
            <View>
              <Heading level="3">{userprofile.email}</Heading>
              {/* get the bikes listed and rdy to be added */}
              <View>
                {displayUserBikes()}
              </View>
              <View>
                {addingNewBike ? displayNewBikeInputForm() : <Button onClick={handleAddBike}>Add Bike</Button>}
              </View>
            </View>
          </Flex>
        ))}
      </Grid>
      <Button onClick={signOut}>Sign Out</Button>
    </Flex>
  );
}