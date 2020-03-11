import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
  /* borderTopColor: "blue", */
  border-top-color: #7d40e7;
  border-top-width: 155px;
`;
export const Info = styled.View`
  position: absolute;
  /* margin-top: 10px; */
  background: #ffffff;
  /* border: 1px solid #000; */

  /* margin-left: 15px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 100px;
  /* justify-content: space-between; */
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #7d40e7;
  margin-left: 10px;
  margin-top: 2px;
`;
