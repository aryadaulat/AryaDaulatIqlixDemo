import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from 'react-native-paper';
import {widthBase} from '../../styling/base';

const TopBar = ({backPress, title}: {backPress: any; title: string}) => {
  return (
    <View style={styles.topBar}>
      <TouchableOpacity onPress={backPress}>
        <MaterialCommunityIcons name={'arrow-left'} size={30} />
      </TouchableOpacity>
      <Text variant="titleMedium" style={{fontWeight: 'bold'}}>
        {title}
      </Text>
      <View />
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    // paddingHorizontal: widthBase * 0.02,
  },
});
