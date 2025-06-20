import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const OTPVerificationScreen = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '']); // Only 4 digits
  const inputs = useRef([]);
  const correctOtp = '0901'; // Hardcoded OTP

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input (only for indices 0, 1, 2)
    if (value && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    // Handle backspace to go to previous input
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const isOtpComplete = otp.every(digit => digit !== '');
  const enteredOtp = otp.join('');
  const isOtpCorrect = enteredOtp === correctOtp;
  const canConfirm = isOtpComplete && isOtpCorrect;

  const handleConfirm = () => {
    if (canConfirm) {
      navigation.navigate('ResetPassword');
    }
  };

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
          Enter OTP
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: '#666',
            marginBottom: 40,
            lineHeight: 22,
          }}>
          Please enter the 4-digit OTP sent to your email address.
        </Text>

        {/* OTP Input Boxes - Only 4 boxes */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 20,
            paddingHorizontal: 20,
          }}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => (inputs.current[index] = ref)}
              style={{
                width: 60,
                height: 60,
                borderWidth: 2,
                borderColor: digit 
                  ? (isOtpComplete && !isOtpCorrect ? '#F44336' : '#AD40AF') 
                  : '#ddd',
                borderRadius: 10,
                textAlign: 'center',
                fontSize: 20,
                fontWeight: '600',
                color: '#333',
                backgroundColor: isOtpComplete && !isOtpCorrect ? '#FFEBEE' : 'white',
              }}
              value={digit}
              onChangeText={value => handleOtpChange(value, index)}
              onKeyPress={e => handleKeyPress(e, index)}
              keyboardType="numeric"
              maxLength={1}
              selectTextOnFocus
            />
          ))}
        </View>

      

        {/* OTP Status Message */}
        {isOtpComplete && (
          <Text
            style={{
              fontSize: 14,
              color: isOtpCorrect ? '#4CAF50' : '#F44336',
              textAlign: 'center',
              marginBottom: 20,
              fontWeight: '600',
            }}>
            {isOtpCorrect ? '✓ Correct OTP' : '✗ Incorrect OTP. Please try again.'}
          </Text>
        )}

        <TouchableOpacity
          onPress={canConfirm ? handleConfirm : null}
          style={{
            backgroundColor: canConfirm ? '#AD40AF' : '#ccc',
            padding: 15,
            borderRadius: 10,
            alignItems: 'center',
            marginVertical: 10,
          }}
          disabled={!canConfirm}>
          <Text style={{
            color: 'white',
            fontSize: 16,
            fontWeight: '600',
          }}>
            Confirm
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{color: '#666', fontSize: 16}}>
            Didn't receive the code? 
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Resend</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Text style={{color: '#666', fontSize: 16}}>
            Wrong email? 
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Go Back</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OTPVerificationScreen;