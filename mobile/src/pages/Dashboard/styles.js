import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: transparent;
`;
export const Header = styled.View`
  /* display: flex; */
  padding-top: 10px;
  width: 150px;
  height: 150px;

  /* background: #000000; */
`;

export const Avatar = styled.Image`
  /* background: #000000; */

  padding-top: 10px;
  padding-left: 100px;

  width: 100px;
  height: 100px;
  border-radius: 25px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
