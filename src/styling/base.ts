import {StyleSheet, Dimensions} from 'react-native';

export const heightBase = Dimensions.get('window').height;
export const widthBase = Dimensions.get('window').width;

export const BaseStyle = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
});
