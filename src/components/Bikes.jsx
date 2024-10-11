import * as DBWork from './DBWork';
import {DataStore} from '@aws-amplify/datastore';
import { useState, useEffect } from "react";
import {
    Button,
    Heading,
    Flex,
    View,
    Grid,
    Divider,
  } from "@aws-amplify/ui-react";
import { Link } from 'react-router-dom';

export default function Bikes(){
    const [bikeModels, setBikeModels] = useState([]);
    const [update, setUpdate] = useState([]);
    DBWork.syncDataStore();
    useEffect(() => {
        DBWork.fetchBikeModels(setBikeModels);
        console.log("yeah");
        console.log("here"+ JSON.stringify(bikeModels));
        if(bikeModels.length===0){
            setUpdate(!update);
        }
        else{
            //we good 
        }
      }, [update]);
    

    return (
    <View>
        {bikeModels.map((bikeModel) => (
            <View>
                <Link to="/Stats" className="yes">{bikeModel.modelName ? bikeModel.modelName : "Model Name Not Available"}</Link>
            </View>
        ))}
    </View>
    )
}