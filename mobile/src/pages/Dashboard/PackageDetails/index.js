import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, format, isValid, getHours } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { TouchableOpacity, Alert } from 'react-native';
import 'react-native-gesture-handler';
import PropTypes from 'prop-types';

import api from '~/services/api';

import PagesBackground from '~/components/PagesBackground';

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
  Box1,
  Divider,
  BoxText,
} from './styles';

export default function PackageDetails({ navigation }) {
  const data = navigation.getParam('data');

  const [status, setStatus] = useState('');
  const [startDate, setStartDate] = useState({ start_date: data.start_date });
  const [endDate, setEndDate] = useState({ end_date: data.end_date });

  // It will check if the date is valid before call the format function. If the date is null will appear this '- - / - - / - -'.
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
          }),
        });
      }
    }
    validStartDate();
    // eslint-disable-next-line
}, [data]);

  // Show the package Status
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
  }, [data.end_date, data.start_date]);

  // Send the pick it up Date.
  async function pickItUp() {
    try {
      await api.put(`/deliveryman/${data.id}/deliveries`, {
        start_date: new Date(),
      });
      Alert.alert('Sucesso!', 'Realizado a retirada do produto!');
      navigation.goBack();
      // console.tron.log(response.data);
    } catch (err) {
      Alert.alert('Falha!', 'Erro ao realizar a retirada do produto!');

      if (getHours(new Date()) <= 8 || getHours(new Date()) >= 18) {
        Alert.alert(
          'Falha!',
          `Os Horarios permitidos para realizarem as retiradas são entre às 08:00 - 18:00 horas. Hora atual: ${getHours(
            new Date()
          )} horas`
        );
      }
    }
  }

  return (
    <>
      <PagesBackground />
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
                {endDate.end_date ? endDate.end_date : '- - / - - / - -'}
              </Text>
            </DateColumn>
          </DateInfo>
        </StatusInfo>
        <PackageOption>
          <Box1
            enabled={!!startDate.start_date}
            onPress={() => {
              navigation.navigate('NewProblems', { data });
            }}
          >
            <Icon
              name="highlight-off"
              size={24}
              color="#E74040"
              style={{ paddingLeft: 10 }}
            />
            <BoxText>Informar Problema</BoxText>
          </Box1>
          <Divider />
          <Box1
            onPress={() => {
              navigation.navigate('ShowProblems', { data });
            }}
          >
            <Icon
              name="info-outline"
              size={24}
              color="#E7BA40"
              style={{ paddingLeft: 10 }}
            />
            <BoxText>Visualizar Problemas</BoxText>
          </Box1>
          <Divider />
          {startDate.start_date ? (
            <Box1
              enabled={!endDate.end_date}
              style={{
                paddingRight: 24,
                // borderRightColor: null,
                // borderRightWidth: 0,
              }}
              onPress={() => {
                navigation.navigate('ConfirmDelivery', { data });
              }}
            >
              <Icon
                name="check-circle"
                size={24}
                color="#7D40E7"
                style={{
                  paddingLeft: 15,
                }}
              />
              <BoxText>Confirmar Entrega</BoxText>
            </Box1>
          ) : (
            <Box1
              style={{
                paddingRight: 24,
                // borderRightColor: null,
                // borderRightWidth: 0,
              }}
              onPress={() => pickItUp()}
            >
              <Icon
                name="add-circle"
                size={24}
                color="#7D40E7"
                style={{
                  paddingLeft: 15,
                }}
              />
              <BoxText>Realizar a retirada</BoxText>
            </Box1>
          )}
        </PackageOption>
      </Container>
    </>
  );
}

PackageDetails.navigationOptions = ({ navigation }) => ({
  title: 'Detalhes da encomenda',
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

PackageDetails.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
    getParam: PropTypes.func,
    data: PropTypes.shape({
      start_date: PropTypes.instanceOf(Date),
      end_date: PropTypes.instanceOf(Date),
      id: PropTypes.number,
      product: PropTypes.string,
      signature: PropTypes.shape(),
      recipient: PropTypes.shape({
        name: PropTypes.string,
        street: PropTypes.string,
        number: PropTypes.number,
        city: PropTypes.string,
        state: PropTypes.string,
        zipcode: PropTypes.number,
      }),
    }),
  }).isRequired,
};
