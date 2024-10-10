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
import './Login.css';
import {DataStore} from '@aws-amplify/datastore';
import * as DBWork from './DBWork'



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

async function handleRemove(bike){
  //do a call her that will remove the bike from the list of bikes owned by the owner
  await DataStore.delete(bike);
  setUpdatePage(!update);
}



//save button handler after a bike is added
const handleSaveBike = async (event) => {
  event.preventDefault();
  const myProfile = localUserProfiles[0];
  console.log("localProf"+ JSON.stringify(myProfile));
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
  const success = await DBWork.createNewBike(bikeData);
  if(success){
   restoreBikeSettingDefaults();
   //need to now update the stats
   DBWork.updateAllBikeStats(bikeData);
  }

}

const restoreBikeSettingDefaults = () => {
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


DBWork.syncDataStore();

//queries to the db
  useEffect(() => {
    //syncDataStore();
    DBWork.fetchUserProfile(setUserProfiles,setLocalUserProfiles, client);
    //saveUserProfileToDS();
    DBWork.fetchUserBikes(setUserBikes, localUserProfiles);
  }, [update]);




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