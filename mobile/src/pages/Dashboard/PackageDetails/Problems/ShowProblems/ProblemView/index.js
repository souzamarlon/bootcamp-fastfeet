import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Text } from './styles';
import PagesBackground from '~/components/PagesBackground';

export default function ProblemView({ navigation }) {
  const data = navigation.getParam('data');

  return (
    <PagesBackground>
      <Container>
        <Text>{data}</Text>
      </Container>
    </PagesBackground>
  );
}
ProblemView.navigationOptions = ({ navigation }) => ({
  title: 'Descrição do problema',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={24} color="#FFF" />
    </TouchableOpacity>
  ),
});
