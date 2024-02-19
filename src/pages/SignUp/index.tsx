import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import TopBar from '../../components/TopBar';
import {Logo} from '../../assets';
import {BaseStyle, widthBase} from '../../styling/base';
import {TextInput, Text, Button} from 'react-native-paper';
import {ScrollView} from 'react-native';

const SignUp = ({navigation}: {navigation: any}) => {
  const [secureText, setSecureText] = useState(true);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validate, setValidate] = useState(true);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  useMemo(() => {
    if (email && password && phone && name) {
      const isValid = validateEmail(email);
      if (isValid) {
        setValidate(false);
      }
    } else {
      setValidate(true);
    }
  }, [email, password, phone, name]);

  return (
    <SafeAreaView
      style={[BaseStyle.container, {paddingHorizontal: widthBase * 0.04}]}>
      <ScrollView style={{}}>
        <TopBar backPress={() => navigation.goBack()} title="Sign up Account" />
        <View style={{alignItems: 'center'}}>
          <Image source={Logo} style={{borderRadius: widthBase * 0.2}} />
        </View>
        <View style={{gap: 5, paddingBottom: 20}}>
          <View>
            <Text variant="titleMedium" style={{paddingVertical: 10}}>
              Full Name
            </Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Type your name"
              style={{backgroundColor: '#F4F4F4'}}
            />
          </View>
          <View>
            <Text variant="titleMedium" style={{paddingVertical: 10}}>
              Phone Number
            </Text>
            <TextInput
              value={phone}
              onChangeText={setPhone}
							inputMode='numeric'
              placeholder="Type your phone number"
              style={{backgroundColor: '#F4F4F4'}}
            />
          </View>
          <View>
            <Text variant="titleMedium" style={{paddingVertical: 10}}>
              Email
            </Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Type your email address"
              textColor="#000000"
              style={
                validateEmail(email)
                  ? {backgroundColor: '#FFD8F7'}
                  : {backgroundColor: '#F4F4F4'}
              }
            />
          </View>
          <View>
            <Text variant="titleMedium" style={{paddingVertical: 10}}>
              Password
            </Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Type your password"
              style={{backgroundColor: '#F4F4F4'}}
              right={
                <TextInput.Icon
                  icon="eye"
                  onPress={() => setSecureText(!secureText)}
                />
              }
              secureTextEntry={secureText}
            />
          </View>
          <Button
            mode="contained"
            buttonColor="#B70093"
            textColor="#FFFFFF"
            style={{marginVertical: 20}}
            disabled={validate}>
            Sign up
          </Button>
          <Text style={{fontSize: 12, alignSelf: 'center'}}>
            Already Have a Dokterku account?{' '}
            <Text style={{color: '#B70093'}}>Enter Here</Text>
          </Text>
          <Text style={{fontSize: 12, alignSelf: 'center', color: 'grey'}}>
            by registering, I agree to the{' '}
            <Text style={{color: '#000000', textDecorationLine: 'underline'}}>
              Privacy Policy
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
