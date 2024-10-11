import NavBar from "./NavBar";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native-web';
import { PieChart, Pie, Cell } from 'recharts';

// Define functions outside the Stats component
const getLocalData = (bikename) => {
    // Call to backend
    return { [bikename]: { "percent": 0.6, "numAssigned": 450, "percentOwned": 0.5, "numOwned": 400 } };
};

const displayLocalData = (bikename) => {
    const data1 = getLocalData(bikename);
    const data = [
      { name: 'Group A', value: 400 },
      { name: 'Group B', value: 300 },
      { name: 'Group C', value: 300 },
      { name: 'Group D', value: 200 },
    ];
    
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
};

export default function Stats() {
    return (
        <ScrollView style={{ flex: 1 }}>
            {displayLocalData("Yamaha R7")}  {/* Remove 'this.' */}
        </ScrollView>
    );
}
