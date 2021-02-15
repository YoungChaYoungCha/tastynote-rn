import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {Divider} from 'react-native-paper';
import Header from '../components/Header';
import Input from '../components/Input';
import styled from 'styled-components';
import {
  MainText,
  SubText,
  FancyButton,
  ButtonText,
  SpaceCol,
  SpaceRow,
} from '../components/reuseable/styles';

var width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  signUpText: {
    width: width * 0.4,
    height: 50,
    borderRadius: 8,
  },
});

const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const HeaderContainer = styled.View`
  flex: 1;
  background-color: #f13005;
  opacity: 0.55;
  justify-content: center;
`;

const TitleText = styled.Text`
  font-size: 25;
  margin-left: 30;
`;

const ContentContainer = styled.View`
  flex: 4;
  margin-left: 35;
`;

const PasswordContainer = styled.View`
  flex-direction: row;
`;

const CheckPassword = styled.View`
  justify-content: flex-start;
`;
const CheckPasswordText = styled.Text`
  color: ${(props) => (props.isSamePassword ? '#006400' : '#dc143c')};
`;
const CertifyContainer = styled.View`
  flex: 6;
  margin-left: 35;
`;
const EmailContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
const AtSign = styled.Text`
  font-size: 17;
  font-weight: bold;
`;

export default function SignUp({navigation}) {
  const [userInfo, setUserInfo] = useState({
    userName: '',
    email: '',
    password: '',
  });
  const [checkPassword, setCheckPassword] = useState('');
  const [isSamePassword, setIsSamePassword] = useState(false);
  const [emailHost, setEmailHost] = useState('');
  const [emailDomain, setEmailDomain] = useState('');
  const [authCode, setAuthCode] = useState();
  const [inputAuthCode, setInputAuthCode] = useState();
  const [isCodeSubmit, setIsCodeSubmit] = useState(false);
  const {userName, email, password} = userInfo;

  const onChange = (name, value) => {
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  useEffect(() => {
    if (password && checkPassword === password) {
      setIsSamePassword(true);
    } else {
      setIsSamePassword(false);
    }
  }, [password]);

  return (
    <Container>
      <HeaderContainer>
        <Header title="Tasty SignUp" />
      </HeaderContainer>
      <SpaceCol size="20px" />
      <TitleText>회원가입</TitleText>
      <ContentContainer>
        <SpaceCol size="18px" />
        <Input
          label="이름"
          keyName="userName"
          value={userName}
          onChangeObj={onChange}
          width={width * 0.8}
        />
        <SpaceCol size="10px" />
        <PasswordContainer>
          <Input
            label="비밀번호"
            value={checkPassword}
            onChangeValue={setCheckPassword}
            width={width * 0.385}
            isSecure={true}
          />
          <SpaceRow size="10px" />
          <Input
            label="비밀번호 확인"
            keyName="password"
            value={password}
            onChangeObj={onChange}
            width={width * 0.385}
            isSecure={true}
            disabled={checkPassword ? false : true}
          />
        </PasswordContainer>
        {password ? (
          <CheckPassword>
            <CheckPasswordText isSamePassword={isSamePassword}>
              {isSamePassword
                ? '비밀번호가 일치합니다.'
                : '비밀번호가 일치하지 않습니다.'}
            </CheckPasswordText>
          </CheckPassword>
        ) : null}
      </ContentContainer>
      <TitleText>인증</TitleText>
      <SpaceCol size="15px" />
      <CertifyContainer>
        <EmailContainer>
          <Input
            label="이메일"
            value={emailHost}
            onChangeValue={setEmailHost}
            width={width * 0.4}
          />
          <SpaceRow size="10px" />
          <AtSign>@</AtSign>
          <SpaceRow size="10px" />
          <Input
            label="도메인"
            value={emailDomain}
            onChangeValue={setEmailDomain}
            width={width * 0.31}
          />
        </EmailContainer>
        <SpaceCol size="15px" />
        <FancyButton
          style={{width: width * 0.8, height: 50}}
          background={[241, 48, 5]}
          disabled={emailHost && emailDomain ? false : true}
          isValid={emailHost && emailDomain}
          onPress={() => {
            // 코드전송 API
            // setAuthCode(getAuthCode())
            setAuthCode(1111);
            setIsCodeSubmit(true);
          }}>
          <ButtonText>{isCodeSubmit ? '재전송' : '코드 전송'}</ButtonText>
        </FancyButton>
        <SpaceCol size="10px" />
        {authCode ? (
          <>
            <Input
              label="인증번호"
              value={inputAuthCode}
              onChangeValue={setInputAuthCode}
              width={width * 0.8}
            />
            <SpaceCol size="15px" />

            <FancyButton
              style={{width: width * 0.8, height: 50}}
              background={[30, 250, 50]}
              onPress={() => {
                if (authCode == inputAuthCode) {
                  navigation.navigate('Home');
                }
              }}>
              <ButtonText>인증하기</ButtonText>
            </FancyButton>
          </>
        ) : null}
      </CertifyContainer>
    </Container>
  );
}
