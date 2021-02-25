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

export default function Header({title}) {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#fff',
          textAlign: 'center',
        }}>
        {title}
      </Text>
    </View>
  );
}
