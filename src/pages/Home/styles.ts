import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 150px 0px;
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  padding: 0 40px;
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 50px;
  color: #fff;
  margin-top: 80px;

  width: 239px;

  font-family: 'Poppins-Regular';
`;

export const NavigationButton = styled.TouchableOpacity`
  background: #ffb84d;
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  color: #7a1818;
  flex: 1;

  text-align: center;
`;

export const IconContainer = styled.View`
  background-color: #ffc46b;
  padding: 16px;

  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;
