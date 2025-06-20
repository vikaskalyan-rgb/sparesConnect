import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';

const ForgotPasswordScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* Back button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          top: 50,
          left: 25,
          zIndex: 1,
          padding: 10,
        }}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>
      
      <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 25}}>

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 10,
          }}>
          Forgot Password
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: '#666',
            marginBottom: 30,
            lineHeight: 22,
          }}>
          Please enter your email address and employee ID to receive an OTP for password reset.
        </Text>

        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          keyboardType="email-address"
        />

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

        <CustomButton 
          label={"Send OTP"} 
          onPress={() => {
            // Navigate to OTP verification screen
            navigation.navigate('OTPVerification');
          }} 
        />

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{color: '#666', fontSize: 16}}>
            Remember your password? 
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;