import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {TextInput} from 'react-native-paper';

export default function Input({
  label,
  keyName,
  value,
  onChangeObj,
  onChangeValue,
  width,
  isSecure,
}) {
  return (
    <View style={{width: width}}>
      <TextInput
        mode="outlined"
        label={label}
        value={value}
        onChangeText={
          typeof onChangeObj !== 'undefined'
            ? (text) => onChangeObj(keyName, text)
            : (text) => onChangeValue(text)
        }
        secureTextEntry={isSecure}
      />
    </View>
  );
}
