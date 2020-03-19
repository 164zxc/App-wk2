import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './src/components/Header';
import Musiccard from './src/components/Musiccard';
import Footer from './src/components/Footer';
// export default function App()
const App = () => {
  return (
    <View >
       <Header/>
       <Musiccard/>
       <Footer/>
    </View>
  );
};
export default App;