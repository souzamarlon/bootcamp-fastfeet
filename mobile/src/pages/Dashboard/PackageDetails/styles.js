import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin: auto;
  width: 90%;
  top: 88px;
  align-self: center;
  background: transparent;
  position: absolute;
`;

export const AddressInfo = styled.View`
  padding-top: 5px;
  border-radius: 4px;
  background: #fff;
  /* height: 206px; */
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
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
  border-radius: 4px;
  margin-top: 10px;
  background: #fff;
  /* height: 158px; */
`;

export const DateInfo = styled.View`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;
export const DateColumn = styled.View`
  flex-direction: column;
  display: flex;
  text-align: right;
  margin-right: auto;
`;

export const PackageOption = styled.View`
  top: 10px;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;

  background: #f8f9fd;
  display: flex;
  height: 85px;
`;

export const Box1 = styled(RectButton)`
  padding-top: 15px;
  width: 110px;
  align-items: center;
  display: flex;
`;

export const Divider = styled.View`
  border-right-color: #0000001a;
  border-right-width: 1px;
`;

export const BoxText = styled.Text`
  font-size: 12px;
  color: #7d40e7;
  margin-left: 11px;
  margin-top: 2px;
  text-align: center;
`;
