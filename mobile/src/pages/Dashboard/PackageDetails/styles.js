import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const AddressInfo = styled.View`
  padding-top: 5px;
  border-radius: 20px;
  margin-left: 20px;
  margin-right: 20px;
  background: #fff;
  height: 206px;
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
  border-radius: 20px;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  background: #fff;
  height: 158px;
`;

export const DateInfo = styled.View`
  flex-direction: row;
  display: flex;
`;
export const DateColumn = styled.View`
  flex-direction: column;
  display: flex;
`;

export const PackageOption = styled.View`
  padding-top: 5px;
  border-radius: 4px;
  margin-top: 8px;
  margin-left: 20px;
  margin-right: 20px;
  flex-direction: row;
  width: 316px;
  height: 83px;
  background: #f8f9fd;
  display: flex;
`;

export const Box = styled.View`
  padding-top: 5px;
  padding-right: 10px;
  height: 85px;
  width: 100%;
  max-width: 110px;
  flex-direction: column;
  border-right-color: #eee;
  border-right-width: 2px;
  align-items: center;
`;

export const BoxText = styled.Text`
  font-size: 12px;
  color: #7d40e7;
  margin-left: 10px;
  margin-top: 2px;
  text-align: center;
`;
