import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Content = styled(RectButton)`
  margin-top: 20px;

  width: 100%;
  height: 60px;
  background: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
  color: #999999;
  padding: 20px;
  width: 220px;
  line-height: 20px;
  overflow: hidden;
`;
export const Date = styled.Text`
  padding: 23px;
  font-size: 12px;
  color: #c1c1c1;
`;
