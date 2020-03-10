import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Button from '~/components/Button';

export const Container = styled(RectButton)`
  /* margin-bottom: 8px; */
  height: 180px;
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
  background: #f8f9fd;
  flex-direction: row;

  border-radius: 4px;
  box-shadow: 30px 30px rgba(0, 0, 0, 0.3);
  height: 100%;
  max-height: 65px;
`;

export const DateColumn = styled.View`
  margin-top: 10px;
  background: #f8f9fd;
  flex-direction: column;
  flex: 1;
`;

export const CityColumn = styled.View`
  margin-top: 10px;
  background: #f8f9fd;
  flex-direction: column;
  flex: 1;
`;

export const TextTitle = styled.Text`
  font-size: 8px;
  color: #999999;
  font-weight: bold;
`;
export const TextContent = styled.Text`
  color: #444444;
  font-size: 12px;
  font-weight: bold;
`;
export const ButtonDetailView = styled(Button)`
  background: transparent;
  font-weight: bold;
  margin-top: 5px;
`;
