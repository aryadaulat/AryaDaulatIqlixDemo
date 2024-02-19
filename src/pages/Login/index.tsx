import {StyleSheet, View, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useMemo, useState} from 'react';
import {BaseStyle, heightBase, widthBase} from '../../styling/base';
import {
  Button,
  Checkbox,
  Dialog,
  Portal,
  Text,
  TextInput,
} from 'react-native-paper';
import TopBar from '../../components/TopBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Login = ({navigation}: {navigation: any}) => {
  const [secureText, setSecureText] = useState(true);
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [validate, setValidate] = useState(true);
  const [password, setPassword] = useState('');
  const [visible, setVisible] = React.useState(false);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  useMemo(() => {
    if (email && password) {
      const isValid = validateEmail(email);
      if (isValid) {
        setValidate(false);
      }
    } else {
      setValidate(true);
    }
  }, [email, password]);
  const hideDialog = () => setVisible(false);

  return (
    <SafeAreaView style={[BaseStyle.container, {paddingHorizontal: 10}]}>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Icon
            name={'check'}
            style={styles.checkBox}
            color={'#FFFFFF'}
            size={60}
          />
          <Dialog.Title style={styles.title}>Login Successful</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">
              Thank You, you have successfully logged in to Iqlix app, click
              again to go Iqlix main page
            </Text>
            <Button
              mode="contained"
              buttonColor="#B70093"
              textColor="#FFFFFF"
              style={{marginTop: 20}}
              onPress={() => {
                setVisible(false);
                navigation.navigate('HomeTabs');
              }}>
              Back to Home
            </Button>
          </Dialog.Content>
        </Dialog>
      </Portal>
      <TopBar backPress={() => navigation.goBack()} title="Iqlix Login" />
      <SafeAreaView
        style={{paddingHorizontal: widthBase * 0.03, gap: 20, marginTop: 20}}>
        <Button
          icon="facebook"
          mode="contained"
          buttonColor="#007DD1"
          onPress={() => console.log('Pressed')}>
          Sign In with Facebook
        </Button>
        <Button
          icon="twitter"
          mode="contained"
          buttonColor="#64B4FF"
          onPress={() => console.log('Pressed')}>
          Sign In with Twitter
        </Button>
        <Button
          icon="google"
          mode="contained"
          buttonColor="#FFFFFF"
          textColor="#000000"
          contentStyle={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.18,
            shadowRadius: 1.0,

            elevation: 1,
          }}
          onPress={() => console.log('Pressed')}>
          Sign In with Google
        </Button>
      </SafeAreaView>
      <View style={{flexDirection: 'row', paddingVertical: 20}}>
        <View
          style={{
            height: 2,
            flex: 1,
            backgroundColor: 'lightgrey',
            alignSelf: 'center',
          }}
        />
        <Text style={{paddingHorizontal: 20, fontSize: 16, color: 'grey'}}>
          or
        </Text>
        <View
          style={{
            height: 2,
            flex: 1,
            backgroundColor: 'lightgrey',
            alignSelf: 'center',
          }}
        />
      </View>
      <View style={{gap: 20}}>
        <TextInput
          left={
            <TextInput.Icon
              icon="mail"
              color={validateEmail(email) ? '#B70093' : '#000000'}
            />
          }
          value={email}
          onChangeText={setEmail}
          label={'Enter Your Email'}
          textColor="#000000"
          style={
            validateEmail(email)
              ? {backgroundColor: '#FFD8F7'}
              : {backgroundColor: '#F4F4F4'}
          }
          // contentStyle={{backgroundColor:'grey'}}
        />
        <TextInput
          left={<TextInput.Icon icon="lock" />}
          style={{backgroundColor: '#F4F4F4'}}
          onChangeText={setPassword}
          value={password}
          right={
            <TextInput.Icon
              icon="eye"
              onPress={() => setSecureText(!secureText)}
            />
          }
          secureTextEntry={secureText}
          label={'Enter Your Password'}
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            color="#B70093"
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text variant="bodyMedium">Remenber Password</Text>
        </View>
      </View>
      <View style={{gap: 20, marginTop: 20}}>
        <Button
          mode="contained"
          buttonColor="#B70093"
          textColor="#FFFFFF"
          onPress={() => setVisible(true)}
          disabled={validate}>
          Login
        </Button>
        <Text style={{textAlign: 'center'}}>
          Don't have an account?{' '}
          <Text
            style={{color: '#B70093', fontWeight: '600'}}
            onPress={() => navigation.navigate('SignUp')}>
            Sign up Now
          </Text>
        </Text>
        <Text
          style={{color: '#B70093', alignSelf: 'center'}}
          onPress={() => console.log('clicked')}>
          Forgot Password?
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthBase * 0.02,
  },
  title: {
    textAlign: 'center',
  },
  checkBox: {
    backgroundColor: '#B70093',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    padding: 20,
  },
});
