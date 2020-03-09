import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: transparent;
`;
export const Header = styled.View`
  padding-top: 20px;
  margin-left: 20px;
  width: 300px;
  display: flex;

  /* align-items: center; */
  /* justify-content: space-between; */

  /* background: #000000; */

  flex-direction: row;
  /* text-align: left; */
`;

export const Avatar = styled.Image`
  /* background: #000000; */
  /* padding-top: 10px; */
  /* padding-left: 100px; */
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
export const Welcome = styled.Text`
  color: #666666;
  font-size: 12px;
  height: 16px;
  display: flex;
`;

export const Name = styled.Text`
  /* padding-top: 30px; */
  background: #000000;

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
