import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  /* flex: 1; */
  background: transparent;
  flex-direction: row;
  margin-left: 40px;
  padding-top: 20px;
  width: 100%;
  max-width: 375px;
  justify-content: center;
  align-items: center;
`;
export const Header = styled.View`
  padding-top: 5px;
  margin-left: 10px;
  width: 300px;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  /* flex: 1; */
`;

export const Welcome = styled.Text`
  color: #666666;
  font-size: 12px;
  display: flex;
  height: 16px;
  line-height: 12px;
`;

export const Name = styled.Text`
  color: #444444;
  font-size: 22px;

  height: 29px;
  font-weight: bold;
  display: flex;
`;

export const LogoutButton = styled(RectButton)`
  background: transparent;
  position: absolute;
  left: 190px;
  padding-top: 10px;

  /* height: 20px; */

  align-items: center;
  justify-content: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
