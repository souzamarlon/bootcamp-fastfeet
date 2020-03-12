import React, { useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO } from 'date-fns';

import 'react-native-gesture-handler';

import PackageBackground from '~/components/PackageBackground';

import {
  Container,
  Header,
  Name,
  AddressInfo,
  ContentTitle,
  Text,
  StatusInfo,
} from './styles';

export default function PackageDetails({ navigation }) {
  const [status, setStatus] = useState('');
  const data = navigation.getParam('data');

  useEffect(() => {
    async function loadStatus() {
      if (!data.start_date && !data.end_date) {
        console.tron.log('Pendente');
      }
      if (data.start_date && !data.end_date) {
        console.tron.log('Retirada');
      }
      if (data.start_date && data.end_date) {
        console.tron.log('Entregue');
      }
    }
    loadStatus();
  }, [data]);

  console.tron.log(data);
  return (
    <PackageBackground>
      <Container>
        <AddressInfo>
          <Header>
            <Icon
              name="local-shipping"
              size={24}
              color="#7d40e7"
              style={{ paddingLeft: 15 }}
            />
            <Name>Informações da entrega</Name>
          </Header>
          <ContentTitle>DESTINATÁRIO</ContentTitle>
          <Text>{data.recipient.name}</Text>
          <ContentTitle>ENDEREÇO DE ENTREGA</ContentTitle>
          <Text>
            {`${data.recipient.street}, ${data.recipient.number}, ${data.recipient.city} - ${data.recipient.state}, ${data.recipient.zipcode}  `}
          </Text>
          <ContentTitle>PRODUTO</ContentTitle>
          <Text>{data.product}</Text>
        </AddressInfo>

        <StatusInfo>
          <Header>
            <Icon
              name="local-shipping"
              size={24}
              color="#7d40e7"
              style={{ paddingLeft: 15 }}
            />
            <Name>Situação da entrega</Name>
          </Header>
          <ContentTitle>STATUS</ContentTitle>
          <Text>{status}</Text>
          <ContentTitle>ENDEREÇO DE ENTREGA</ContentTitle>
          <Text>
            {`${data.recipient.street}, ${data.recipient.number}, ${data.recipient.city} - ${data.recipient.state}, ${data.recipient.zipcode}  `}
          </Text>
        </StatusInfo>
      </Container>
    </PackageBackground>
  );
}
