import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Text } from './styles';
import PagesBackground from '~/components/PagesBackground';

export default function ReadProblem({ navigation }) {
  const item = navigation.getParam('item');

  return (
    <PagesBackground>
      <Container>
        <Text>{item.description}</Text>
      </Container>
    </PagesBackground>
  );
}
ReadProblem.navigationOptions = ({ navigation }) => ({
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
