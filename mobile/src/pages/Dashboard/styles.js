import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: transparent;
  flex-direction: row;
  margin-left: 20px;
  padding-top: 20px;
`;
export const Header = styled.View`
  padding-top: 20px;
  margin-left: 12px;
  width: 300px;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  /* flex: 1; */
`;
export const Welcome = styled.Text`
  color: #666666;
  font-size: 12px;
  display: flex;
  height: 16px;
`;

export const Name = styled.Text`
  color: #444444;
  font-size: 22px;

  height: 29px;
  font-weight: bold;
  display: flex;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
