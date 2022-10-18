import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const First = () => {
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.0}}
      end={{x: 1.0, y: 0.0}}
      colors={['yellow', 'blue']}
      style={{
        backgroundColor: 'green',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <LinearGradient
        colors={['red', 'orange']}
        style={{padding: 20, backgroundColor: 'white', borderRadius: 10}}>
        <TouchableOpacity>
          <Text style={{color: 'black', fontSize: 30}}>Click Me</Text>
        </TouchableOpacity>
      </LinearGradient>
    </LinearGradient>
  );
};

export default First;

const styles = StyleSheet.create({});
