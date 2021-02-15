import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import styled from 'styled-components';
import {
  MainText,
  SubText,
  FancyButton,
  ButtonText,
  SpaceCol,
} from '../components/reuseable/styles';
var width = Dimensions.get('window').width;

const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const IntroContainer = styled.View`
  flex: 1.5;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({
  loginText: {
    width: width * 0.8,
    height: 50,
    borderRadius: 8,
  },
});

export default function Intro({navigation}) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    if (id && password) setIsValid(true);
    if (!id || !password) setIsValid(false);
  }, [id, password]);
  return (
    <Container>
      <IntroContainer>
        <MainText>Tasty Note</MainText>
        <SubText>나만의 맛집 기록 다이어리</SubText>
      </IntroContainer>
      <InputContainer>
        <TextInput
          mode="outlined"
          style={styles.loginText}
          label="ID"
          value={id}
          onChangeText={(text) => setId(text)}
        />
        <SpaceCol size="20px" />
        <TextInput
          mode="outlined"
          style={styles.loginText}
          label="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </InputContainer>
      <ButtonContainer>
        <FancyButton
          background={[241, 48, 5]}
          disabled={isValid ? false : true}
          isValid={isValid}
          onPress={() => {
            //로그인 성공 시
            navigation.navigate('Home');
          }}>
          <ButtonText>로그인</ButtonText>
        </FancyButton>
        <SpaceCol size="20px" />
        <FancyButton
          background={[30, 250, 50]}
          isValid={true}
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <ButtonText>회원가입</ButtonText>
        </FancyButton>
      </ButtonContainer>
    </Container>
  );
}
