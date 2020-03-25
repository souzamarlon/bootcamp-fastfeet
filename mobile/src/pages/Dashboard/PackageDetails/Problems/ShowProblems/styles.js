import styled from 'styled-components/native';

export const Background = styled.View`
  background-color: #7d40e7;
  height: 155px;
  position: absolute;

  flex-direction: column;
`;

export const Container = styled.View`
  top: 70px;

  padding: 0 25px;
  height: 520px;
  background: transparent;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
