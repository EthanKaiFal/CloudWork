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
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/data";
import outputs from "../../amplify_outputs.json";
import { bikesByUserId } from "../graphql/queries";


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
  const [userBikes, setUserBikes] = useState([])
  const { signOut } = useAuthenticator((context) => [context.user]);
  //profile info inputs
  const [yearsRiding, setYearsRiding] = useState(0);
  const [bikeName, setBikeName] = useState('');
  const [bikeSold, setBikeSold] = useState(false);
  const [bikeScore, setBikeScore] = useState(0.0);
  const [bikeBroken, setBikeBroken] = useState(false);
  const [monthsOwned, setMonthsOwned] = useState(0);
  //frontend status variable 
  const [addingNewBike, setaddingPage] = useState(false);


  //inputChangeHandlers
  const handleyearsRiding = (event) => {
    setYearsRiding(event.target.value);
  };
  const handleBikeName = (event) => {
    setBikeName(event.target.value);
  };
  const handleBikeSold = (event) => {
    if(event.target.value.equals("Yes")){
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
    if(event.target.value.equals("Yes")){
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


//save button handler after a bike is added
const handleSaveBike = (event) => {
  event.preventDefault();
  alert('Bike Name: ${bikeName}');
  alert('Bike Sold: ${bikeSold}');
  alert('Bike Score: ${bikeScore}');
  alert('Bike Broken: ${bikeBroken}');
  alert('Bike Months Owned: ${monthsOwned}');

  //push to backend after 
}
  useEffect(() => {
    fetchUserProfile();
  }, []);

  async function fetchUserProfile() {
    const { data: profiles } = await client.models.UserProfile.list();
    setUserProfiles(profiles);
  }

  async function fetchUserBikes() {
    try {
    const bikesData = await API.graphql(graphqlOperation(listBikes));
    console.log(bikesData);
    //sort by the bike number ascending so that we get the order in which owned
    const sortedBikes = bikesData.sort((a, b) => a.bikeNumber = b.bikenumber);
    setUserBikes(sortedBikes);
    }
    catch (err) {
      console.error('Error fetching bikes', err);
    }
  };

  const handleRemove = (bikeId) => {
    //do a call her that will remove the bike from the list of bikes owned by the owner
  }

  const displayUserBikes = () => {
    //we want to first fetch all the bikes 
    fetchUserBikes();
    return(
    <View>
      {userBikes.map((userBike) => (
        <View>
          <View>
            <Text>Bike Number: {userBike.bikeNumber}</Text>
            <Text>Brand:{userBike.brand}</Text>
            <Text>Model:{userBike.model}</Text>
            <Text>Year:{userBike.year}</Text>
            {userBike.broken ? <Text>Broken: Yes</Text> : <Text>Broken: No</Text>}
            {userBike.sold ? <Text>Sold: Yes</Text> : <Text>Sold: No</Text>}
            <Text>Months Owned: {userBike.ownershipMonths}</Text>
          </View>
          <Button onClick={() =>handleRemove(userBike.bikeId)}> Remove </Button>
        </View>
      ))}
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