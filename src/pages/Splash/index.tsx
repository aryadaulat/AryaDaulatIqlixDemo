import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';

const Splash = ({navigation}: {navigation: any}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Register');
    }, 3000);
  }, [navigation]);

  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
