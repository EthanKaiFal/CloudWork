// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native-web'; // Importing from react-native
// import Login from './Login.jsx'; // Import your Login component

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to the App!</Text>
//       <Login /> {/* This can be your login component */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   title: {
//     fontSize: 24,
//     textAlign: 'center',
//     margin: 10,
//   },
// });

// export default App;








































import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Stats from "./Stats"
import Bikes from "./Bikes"
import Login from "./Login"
import NavBar from './NavBar';
//import { Home } from './components/Home';
//import { Register } from './components/registration';
//import { Profile } from './components/Profile';
//import {ChatDetails} from './components/ChatDetails'
//import {NewChatForm} from './components/NewChat'


function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function App() {
  return (

      <div className="bg-zinc-800 flex-col mx-auto max-w-3xl">
        <NavBar />
        <main className="px-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Bikes" element={<Bikes />} />
          <Route path="/Stats" element={<Stats />} />
          {/* <Route path="/login/:profileID" element={<Login />} /> */}
          {/* <Route path="/profile" element ={<Profile />} />
          <Route path="/Groups" element={<Groups />} /> */}
          <Route path="*" element={<Login />} />
        </Routes>
        </main>
        </div>
  );
}

export default App