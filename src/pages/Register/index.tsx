import {Animated, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Calendar, Human, Movie} from '../../assets';
import {BaseStyle, heightBase, widthBase} from '../../styling/base';
import {Text, Button} from 'react-native-paper';
import {ExpandingDot} from '../../components';
const Register = ({navigation}: {navigation: any}) => {
  const [condition, setCondition] = useState(1);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  function renderHeadImage() {
    if (condition === 1) {
      return Calendar;
    } else if (condition === 2) {
      return Movie;
    } else {
      return Human;
    }
  }
  function handleNextPress() {
    if (condition === 3) {
      return navigation.navigate('Login');
    } else {
      setCondition(prev => {
        return prev + 1;
      });
    }
  }

  function renderTitleText() {
    if (condition === 1) {
      return 'Iqlix Ready to Fulfill Your Excitement';
    } else if (condition === 2) {
      return 'Easy Booking, and No Need to Queue';
    } else {
      return 'Get Start Immediately to Take the Next Step';
    }
  }
  function renderBodyText() {
    if (condition === 1) {
      return 'Iqlis has lots of quality movie, discover and explore experiences you have never had in this application';
    } else if (condition === 2) {
      return 'The advantage of Iqlix to order tickets easily for your excitement in watching your favorite movie';
    } else {
      return 'We offer several film recommendations for you to have an extraordinary experience';
    }
  }

  function renderBar() {
    if (condition === 1) {
      return (
        <View style={styles.bodyBar}>
          <View style={styles.barPage} />
          <View style={styles.barPageNormal} />
          <View style={styles.barPageNormal} />
        </View>
      );
    } else if (condition === 2) {
      return (
        <View style={styles.bodyBar}>
          <View style={styles.barPageNormal} />
          <View style={styles.barPage} />
          <View style={styles.barPageNormal} />
        </View>
      );
    } else {
      return (
        <View style={styles.bodyBar}>
          <View style={styles.barPageNormal} />
          <View style={styles.barPageNormal} />
          <View style={styles.barPage} />
        </View>
      );
    }
  }

  return (
    <SafeAreaView style={BaseStyle.container}>
      <Image source={renderHeadImage()} height={heightBase * 0.5} />
      <View style={styles.bodyView}>
        <Text
          style={[styles.bodyText, {fontWeight: 'bold'}]}
          variant="titleLarge">
          {renderTitleText()}
        </Text>
        <Text style={[styles.bodyText, {color: 'gray'}]} variant="bodySmall">
          {renderBodyText()}
        </Text>
        {renderBar()}
        {/* <ExpandingDot
          data={[1,2,3]}
          expandingDotWidth={30}
          scrollX={scrollX}
          inActiveDotColor={'#347af0'}
          activeDotColor={'#347af0'}
          inActiveDotOpacity={0.5}
          dotStyle={styles.dotStyles}
          containerStyle={styles.constainerStyles}
        /> */}
      </View>
      <View style={styles.bodyButton}>
        <Button
          mode="contained"
          onPress={() => console.log('Pressed Skip')}
          contentStyle={{width: widthBase * 0.4}}
          buttonColor="#FFDBF8"
          textColor="#B70093">
          Skip
        </Button>
        <Button
          mode="contained"
          onPress={handleNextPress}
          contentStyle={{width: widthBase * 0.4}}
          buttonColor="#B70093">
          Next
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  bodyView: {
    paddingVertical: heightBase * 0.03,
    paddingHorizontal: widthBase * 0.03,
  },
  bodyText: {
    textAlign: 'center',
  },
  bodyBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: heightBase * 0.02,
  },
  barPage: {
    backgroundColor: 'purple',
    width: widthBase * 0.07,
    height: heightBase * 0.01,
    borderRadius: widthBase * 0.02,
  },
  barPageNormal: {
    width: widthBase * 0.03,
    height: heightBase * 0.01,
    backgroundColor: 'grey',
    borderRadius: widthBase * 0.02,
  },
  bodyButton: {
    paddingHorizontal: widthBase * 0.08,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dotStyles: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  constainerStyles: {
    // top: 30,
  },
});
