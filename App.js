import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import First from './compoents2/First';
import Sec from './compoents2/Sec';
const Rahil = createMaterialTopTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Rahil.Navigator>
        <Rahil.Screen name="home" component={First} />
        <Rahil.Screen name="hom" component={Sec} />
      </Rahil.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
