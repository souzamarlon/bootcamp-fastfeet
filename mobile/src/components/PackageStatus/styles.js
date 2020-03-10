import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  /* margin-bottom: 8px; */
  height: 169px;
  width: 100%;
  max-width: 320px;
  /* padding: 10px; */
  border-radius: 4px;
  background: #fff;
  border: 0;
  border-radius: 4px;
  box-shadow: 30px 30px rgba(0, 0, 0, 0.3);
`;

export const Info = styled.View`
  margin-top: 10px;
  /* margin-left: 15px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  /* justify-content: space-between; */
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #7d40e7;
  margin-left: 10px;
  margin-top: 2px;
`;

export const Content = styled.View`
  margin-top: 10px;
  /* margin-left: 15px; */
  /* display: flex; */
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  background: #f8f9fd;
  height: 50px;
  width: 100%;
  /* justify-content: space-between; */
`;
export const Time = styled.Text`
  align-items: center;
  /* display: flex; */
  color: #999;
  font-size: 13px;
  /* margin-top: 4px; */
  margin-right: 5px;
`;

export const Text = styled.Text`
  /* display: flex; */
  /* margin: 20px; */
  font-size: 14px;
  color: #666666;
`;
