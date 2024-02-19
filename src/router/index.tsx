import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Splash,
  Register,
  Login,
  SignUp,
  HomeScreen,
  CinemasScreen,
  FoodScreen,
  ProfileScreen,
  TicketScreen,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  function getWidth() {
    let width = Dimensions.get('window').width;

    // Horizontal Padding = 20...
    width = width - 80;

    // Total five Tabs...
    return width / 5;
  }

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#B70093',
          // Floating Tab Bar...
          tabBarStyle: {
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 20,
            marginHorizontal: 20,
            // Max Height...
            height: 80,
            borderRadius: 10,
            // Shadow...
            shadowColor: '#000',
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            paddingHorizontal: 20,
          },
        }}>
        {
          // Tab Screens....
          // Tab ICons....
        }
        <Tab.Screen
          name={'Home'}
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  // centring Tab Button...
                  position: 'absolute',
                  top: 20,
                  alignItems: 'center',
                }}>
                <Icon
                  name="home"
                  size={30}
                  color={focused ? '#B70093' : 'gray'}></Icon>
                <Text style={{fontSize: 12}}>Home</Text>
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}></Tab.Screen>

        <Tab.Screen
          name={'Cinema'}
          component={CinemasScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  // centring Tab Button...
                  position: 'absolute',
                  top: 20,
                  alignItems: 'center',
                }}>
                <Icon
                  name="movie-roll"
                  size={30}
                  color={focused ? '#B70093' : 'gray'}></Icon>
                <Text style={{fontSize: 12}}>Cinemas</Text>
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true,
              }).start();
            },
          })}></Tab.Screen>

        {
          // Extra Tab Screen For Action Button..
        }

        <Tab.Screen
          name={'TicketScreen'}
          component={TicketScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <TouchableOpacity>
                <View
                  style={{
                    width: 55,
                    height: 55,
                    backgroundColor: '#B70093',
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: Platform.OS == 'android' ? 50 : 30,
                  }}>
                  <Icon name={'ticket-percent'} color={'#FFFFFF'} size={30} />
                </View>
              </TouchableOpacity>
            ),
          }}></Tab.Screen>

        <Tab.Screen
          name={'FoodScreen'}
          component={FoodScreen}
          options={{
            tabBarLabel: 'Food',
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  // centring Tab Button...
                  position: 'absolute',
                  top: 20,
                  alignItems: 'center',
                }}>
                <Icon
                  name="popcorn"
                  size={30}
                  color={focused ? '#B70093' : 'gray'}></Icon>
                <Text style={{fontSize: 12}}>Food Order</Text>
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true,
              }).start();
            },
          })}></Tab.Screen>

        <Tab.Screen
          name={'ProfileScreen'}
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  // centring Tab Button...
                  position: 'absolute',
                  top: 20,
                  alignItems: 'center',
                }}>
                <Icon
                  name="account"
                  size={30}
                  color={focused ? '#B70093' : 'gray'}></Icon>
                <Text style={{fontSize: 12}}>Profile</Text>
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4,
                useNativeDriver: true,
              }).start();
            },
          })}></Tab.Screen>
      </Tab.Navigator>
      <Animated.View
        style={{
          width: getWidth() - 20,
          height: 2,
          backgroundColor: '#B70093',
          position: 'absolute',
          bottom: 98,
          // Horizontal Padding = 20...
          left: 50,
          borderRadius: 20,
          transform: [{translateX: tabOffsetValue}],
        }}></Animated.View>
    </>
  );
}

const Router = () => {
  function getWidth() {
    let width = Dimensions.get('window').width;

    // Horizontal Padding = 20...
    width = width - 80;

    // Total five Tabs...
    return width / 5;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
