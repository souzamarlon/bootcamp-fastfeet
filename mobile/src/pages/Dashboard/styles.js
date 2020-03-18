import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
  padding-top: 20px;
  width: 100%;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  padding-top: 10px;
  margin-right: 20px;
  margin-left: 20px;
  justify-content: space-between;
`;
export const Header = styled.View`
  padding-top: 5px;
  margin-left: 20px;
  right: 40px;
`;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 100px;
`;

export const Welcome = styled.Text`
  padding-top: 10px;
  color: #666666;
  font-size: 12px;
  line-height: 12px;
  display: flex;
`;

export const Name = styled.Text`
  color: #444444;
  font-size: 22px;
  width: 158px;
  font-weight: bold;
  display: flex;
`;

export const LogoutButton = styled(RectButton)`
  background: transparent;
  text-align: right;
  align-self: center;
`;
export const HeaderStatus = styled.View`
  justify-content: space-between;
  margin: 0 20px;
  flex-direction: row;
`;
export const Title = styled.Text`
  color: #444444;
  font-size: 22px;
  height: 29px;
  font-weight: bold;
  margin-top: 20px;
  display: flex;
  padding-right: 100px;
`;

export const StatusButton = styled(RectButton)`
  margin-top: 30px;
  color: #999999;
  font-size: 12px;
  /* position: absolute; */
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
})``;
