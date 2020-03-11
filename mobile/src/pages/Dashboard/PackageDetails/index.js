import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, formatRelative } from 'date-fns';

import { zonedTimeToUtc } from 'date-fns-tz';
import 'react-native-gesture-handler';
import pt from 'date-fns/locale/pt';

import { Container, Info, Name } from './styles';

export default function PackageDetails({ navigation }) {
  const data = navigation.getParam('data');

  console.tron.log(data);
  return (
    <Container>
      <Info>
        <Icon
          name="local-shipping"
          size={24}
          color="#7d40e7"
          style={{ paddingLeft: 15 }}
        />
        <Name>Informações da entrega</Name>
      </Info>
    </Container>
  );
}
