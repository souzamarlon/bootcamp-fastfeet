import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;

  /* background-color: black; */
`;

export const CameraButton = styled(RectButton)`
  border-radius: 100px;
  top: 200px;
`;

export const CameraIcon = styled.View`
  background-color: #0000004d;
  opacity: 0.5;
  width: 80px;
  height: 80px;
  border-radius: 100px;
  align-self: center;
`;

export const SignImage = styled.Image`
  width: 100px;
  height: 70px;
  /* border-radius: 100px; */
`;
