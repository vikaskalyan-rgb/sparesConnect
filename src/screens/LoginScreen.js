import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginSVG from '../assets/images/misc/login.svg';

import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <LoginSVG
            height={300}
            width={300}
            style={{transform: [{rotate: '-5deg'}]}}
          />
        </View>

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Login
        </Text>

        <InputField
          label={'Employee ID'}
          icon={
            <MaterialIcons
            name="badge"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          keyboardType="default"
        />

        <InputField
          label={'Password'}
          icon={
            <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          inputType="password"
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => navigation.navigate('ForgotPassword')}
        />
        
        <CustomButton label={"Login"} onPress={() => {}} />

      

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
     
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;