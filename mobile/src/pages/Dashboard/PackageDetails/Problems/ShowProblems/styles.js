import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background: transparent;
`;
export const BackgroundTop = styled.View`
  flex: 1;
  background-color: #7d40e7;
  height: 155px;
`;

export const BackgroundBottom = styled.View`
  flex: 3;
  background: transparent;
`;

export const Title = styled.Text`
  top: 100px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
`;

export const Content = styled.View`
  position: relative;
  height: 520px;
  top: 100px;
  padding: 0 25px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
  BackgroundColor: 'transparent',
})``;
