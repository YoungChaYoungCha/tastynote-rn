import styled from 'styled-components';

export const MainText = styled.Text`
  font-size: 50px;
  margin-bottom: 10px;
`;
export const SubText = styled.Text`
  font-size: 20px;
`;

export const FancyButton = styled.TouchableOpacity`
  background-color: ${(props) =>
    `rgba(${props.background[0]}, ${props.background[1]}, ${
      props.background[2]
    }, ${props.isValid ? 1 : 0.3})}`};
  border-radius: 8;
  width: 80%;
  height: 70px;
  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.Text`
  font-size: 20;
  color: white;
`;

export const SpaceCol = styled.View`
  margin-top: ${(props) => props.size};
`;

export const SpaceRow = styled.View`
  margin-left: ${(props) => props.size};
`;

export const FlexBox = styled.View`
  display: flex;
  .flex-1 {
    flex: 1;
  }
  .flex-2 {
    flex: 2;
  }
  .flex-3 {
    flex: 3;
  }
  .flex-4 {
    flex: 4;
  }
  .flex-5 {
    flex: 5;
  }
  .flex-6 {
    flex: 6;
  }
  .flex-7 {
    flex: 7;
  }
  .flex-8 {
    flex: 8;
  }
  .flex-9 {
    flex: 9;
  }
`;
