import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View``;

export const AddressInfo = styled.View`
  padding-top: 5px;
  border-radius: 20px;
  margin-left: 20px;
  margin-right: 20px;
  background: #fff;
  height: 206px;

  /* borderTopColor: "blue", */
  /* border-top-color: #7d40e7;
  border-top-width: 155px; */
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  /* justify-content: space-between; */
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #7d40e7;
  margin-left: 10px;
  margin-top: 2px;
`;

export const ContentTitle = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #999999;
  margin-left: 15px;
  margin-top: 5px;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #666666;
  margin-left: 15px;
  margin-top: 3px;
  margin-bottom: 12px;
`;

export const StatusInfo = styled.View`
  padding-top: 5px;
  border-radius: 20px;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  background: #fff;
  height: 158px;

  /* borderTopColor: "blue", */
  /* border-top-color: #7d40e7;
  border-top-width: 155px; */
`;
