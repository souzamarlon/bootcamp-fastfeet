import styled from 'styled-components/native';

export const Background = styled.View`
  background: #7d40e7;
  height: 155px;

  /* padding-top: 50px; */
`;

export const Container = styled.View`
  top: 70px;
  margin: 0 25px;
  background: transparent;
  position: absolute;
  flex: 1;
  /* margin: auto; */
`;

export const Title = styled.Text`
  margin-top: 0;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
