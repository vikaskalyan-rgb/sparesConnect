import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,

} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';


const ResetPasswordScreen = ({navigation}) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (value) => {
    setNewPassword(value);
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
  };

  const handleResetPassword = () => {
    // Navigate back to login screen directly
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  // Real-time validation
  const passwordsMatch = newPassword === confirmPassword && newPassword.length > 0;
  const canResetPassword = newPassword.length > 0 && confirmPassword.length > 0 && passwordsMatch;

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
          Reset Password
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: '#666',
            marginBottom: 40,
            lineHeight: 22,
          }}>
          Please enter your new password and confirm it.
        </Text>

        {/* Styled password inputs */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
          paddingBottom: 8,
          marginBottom: 25,
        }}>
          <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 10}}
          />
          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              color: '#333',
            }}
            placeholder="New Password"
            placeholderTextColor="#666"
            secureTextEntry
            value={newPassword}
            onChangeText={handlePasswordChange}
          />
        </View>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
          paddingBottom: 8,
          marginBottom: 25,
        }}>
          <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 10}}
          />
          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              color: '#333',
            }}
            placeholder="Confirm Password"
            placeholderTextColor="#666"
            secureTextEntry
            value={confirmPassword}
            onChangeText={handleConfirmPasswordChange}
          />
        </View>

        {/* Password match indicator */}
        {(newPassword.length > 0 || confirmPassword.length > 0) && (
          <Text
            style={{
              fontSize: 14,
              color: passwordsMatch ? '#4CAF50' : '#F44336',
              marginBottom: 20,
              textAlign: 'center',
            }}>
            {newPassword.length > 0 && confirmPassword.length > 0
              ? (passwordsMatch ? '✓ Passwords match' : '✗ Passwords do not match')
              : ''
            }
          </Text>
        )}

        <TouchableOpacity
          onPress={canResetPassword ? handleResetPassword : null}
          style={{
            backgroundColor: canResetPassword ? '#AD40AF' : '#ccc',
            padding: 15,
            borderRadius: 10,
            alignItems: 'center',
            marginVertical: 10,
          }}
          disabled={!canResetPassword}>
          <Text style={{
            color: 'white',
            fontSize: 16,
            fontWeight: '600',
          }}>
            Reset Password
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;