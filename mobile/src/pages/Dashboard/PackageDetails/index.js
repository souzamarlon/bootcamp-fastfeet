import React, { useEffect, useState, useMemo } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, format, isValid } from 'date-fns';
import pt from 'date-fns/locale/pt';

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
  DateInfo,
  DateColumn,
  PackageOption,
  Box,
  BoxText,
} from './styles';

export default function PackageDetails({ navigation }) {
  const data = navigation.getParam('data');

  const [status, setStatus] = useState('');
  const [startDate, setStartDate] = useState({ start_date: data.start_date });
  const [endDate, setEndDate] = useState({ end_date: data.end_date });

  useEffect(() => {
    async function validStartDate() {
      if (isValid(parseISO(data.start_date))) {
        setStartDate({
          ...startDate,
          start_date: format(parseISO(data.start_date), 'dd/MM/yyyy', {
            locale: pt,
          }),
        });
      }
      if (isValid(parseISO(data.end_date))) {
        setEndDate({
          ...endDate,
          end_date: format(parseISO(data.end_date), 'dd/MM/yyyy', {
            locale: pt,
            addSuffix: true,
          }),
        });
      }
    }
    validStartDate();
    // eslint-disable-next-line
}, [data]);

  useEffect(() => {
    async function loadStatus() {
      if (!data.start_date && !data.end_date) {
        setStatus('Pendente');
      }
      if (data.start_date && !data.end_date) {
        setStatus('Retirada');
      }
      if (data.start_date && data.end_date) {
        setStatus('Entregue');
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
              name="event"
              size={24}
              color="#7d40e7"
              style={{ paddingLeft: 15 }}
            />
            <Name>Situação da entrega</Name>
          </Header>
          <ContentTitle>STATUS</ContentTitle>
          <Text>{status}</Text>
          <DateInfo>
            <DateColumn>
              <ContentTitle>DATA DE RETIRADA</ContentTitle>
              <Text>
                {startDate.start_date
                  ? startDate.start_date
                  : '- - / - - / - -'}
              </Text>
            </DateColumn>
            <DateColumn>
              <ContentTitle>DATA DE ENTREGA</ContentTitle>
              <Text>
                {startDate.end_date ? startDate.end_date : '- - / - - / - -'}
              </Text>
            </DateColumn>
          </DateInfo>
        </StatusInfo>
        <PackageOption>
          <Box>
            <Icon
              name="highlight-off"
              size={24}
              color="#E74040"
              style={{ paddingLeft: 15 }}
            />
            <BoxText>Informar Problema</BoxText>
          </Box>
          <Box>
            <Icon
              name="info-outline"
              size={24}
              color="#E7BA40"
              style={{ paddingLeft: 15 }}
            />
            <BoxText>Visualizar Problemas</BoxText>
          </Box>
          <Box
            style={{
              paddingRight: 24,
              borderRightColor: null,
              borderRightWidth: 0,
            }}
          >
            <Icon
              name="alarm-on"
              size={24}
              color="#7D40E7"
              style={{
                paddingLeft: 15,
              }}
            />
            <BoxText>Confirmar Entrega</BoxText>
          </Box>
        </PackageOption>
      </Container>
    </PackageBackground>
  );
}
