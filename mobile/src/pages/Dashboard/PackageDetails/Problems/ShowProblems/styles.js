import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View.attrs({
  // width: 200,
  // height: 200,
  borderTopColor: '#7D40E7',
  borderTopWidth: 200,
  // borderTopHeight: 200,

  // colors: ['#7D40E7', '#fff'],
})`
  flex: 1;
  padding: 0 25px;
  /* padding-top: 2px; */
  background: transparent;
`;

export const Title = styled.Text`
  bottom: 90px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
`;

export const Content = styled.SafeAreaView`
  /* height: 520px; */
  top: 100px;
  padding: 0 25px;
`;

export const List = styled.FlatList.attrs({
  // numColumns: 1,
  showsVerticalScrollIndicator: false,
  // BackgroundColor: 'transparent',
})`
  bottom: 85px;
`;
