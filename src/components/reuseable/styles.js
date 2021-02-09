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
    props.background ? props.background : 'white'};
  opacity: 0.55;
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

export const Space = styled.View`
  margin-top: ${(props) => props.size};
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
