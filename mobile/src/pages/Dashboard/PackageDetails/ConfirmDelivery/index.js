import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { RNCamera, FaceDetector } from 'react-native-camera';

import { Container } from './styles';

import PagesBackground from '~/components/PagesBackground';
import api from '~/services/api';

export default function ConfirmDelivery({ navigation }) {
  // const data = navigation.getParam('data');

  return (
    <PagesBackground>
      <Container />
    </PagesBackground>
  );
}

ConfirmDelivery.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar entrega',
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
