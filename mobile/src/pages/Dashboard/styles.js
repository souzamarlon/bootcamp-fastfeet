import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  /* margin-left: 20px; */
  flex: 1;
  background: #ffffff;
  padding-top: 20px;
  width: 100%;
`;

export const HeaderContent = styled.View`
  margin-left: 30px;
  flex-direction: row;
  padding-top: 10px;
  width: 100%;
  /* max-width: 375px; */
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;
export const Header = styled.View`
  padding-top: 5px;
  margin-left: 10px;
  width: 100%;
`;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  /* flex: 1; */
`;

export const Welcome = styled.Text`
  padding-top: 10px;
  color: #666666;
  font-size: 12px;
  display: flex;
  /* height: 18px; */
  line-height: 12px;
`;

export const Name = styled.Text`
  padding-top: 2px;
  color: #444444;
  font-size: 22px;
  width: 158px;
  /* height: 54px; */
  font-weight: bold;
  display: flex;
`;

export const LogoutButton = styled(RectButton)`
  background: transparent;
  position: absolute;
  left: 215px;

  margin-top: 20px;
  /* height: 100%; */
  width: 25px;
  align-self: center;
  justify-content: center;
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
