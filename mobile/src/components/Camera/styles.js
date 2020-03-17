import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin: 0 25px;
  flex: 1;
  flex-direction: column;
  background: transparent;
  align-items: center;
  justify-content: center;
`;

export const CameraLayout = styled.View`
  background-color: transparent;
  height: 400px;
  width: 100%;
  position: absolute;
  top: 0;
`;

export const CameraButton = styled(RectButton)`
  /* background: #7d40e7; */
  /* padding: 15px; */
  /* flex-direction: row; */
  width: 100px;
  height: 30px;
  border-radius: 100px;
  margin-top: 300px;
  align-self: center;
  justify-content: center;
`;

export const CameraIcon = styled.View`
  background-color: #0000004d;
  opacity: 0.5;
  width: 80px;
  height: 80px;
  border-radius: 100px;
  align-self: center;
`;
