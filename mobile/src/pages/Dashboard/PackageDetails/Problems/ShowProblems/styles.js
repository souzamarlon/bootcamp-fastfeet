import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  borderTopColor: '#7D40E7',
  borderTopWidth: 155,
})`
  flex: 1;
  padding: 0 25px;
  /* padding-top: 2px; */
  background: transparent;
`;

export const Title = styled.Text`
  bottom: 80px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
`;

export const List = styled.FlatList.attrs({
  // numColumns: 1,
  showsVerticalScrollIndicator: false,
  // BackgroundColor: 'transparent',
})`
  bottom: 80px;
`;
