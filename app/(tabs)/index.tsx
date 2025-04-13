import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import IndexTransition from '../components/TransitionIndex';
import Login from '../(auth)/login'
// import Register from '../(auth)/register'


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <AuthLayout /> */}
      <IndexTransition/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#1a2f68",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
