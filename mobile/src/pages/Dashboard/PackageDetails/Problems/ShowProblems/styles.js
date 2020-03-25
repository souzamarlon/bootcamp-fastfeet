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

  /*
  position: absolute;

  flex-direction: column; */
`;

export const BackgroundBottom = styled.View`
  flex: 2;
  background: transparent;
  padding: 0 25px;
  /*

  padding: 0 25px;
  height: 520px;
  background: transparent; */
`;

export const Title = styled.Text`
  top: 90px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
`;

export const Content = styled.View`
  position: relative;
  height: 520px;
  top: 90px;
  padding: 0 25px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
})``;
