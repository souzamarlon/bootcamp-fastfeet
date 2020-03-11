import React, { useMemo, useState, useEffect } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import { Text } from 'react-native';
import { zonedTimeToUtc } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StepIndicator from 'react-native-step-indicator';

import {
  Container,
  Info,
  Name,
  TextContent,
  TextTitle,
  Content,
  DateColumn,
  CityColumn,
  ButtonDetailView,
} from './styles';

export default function PackageStatus({ data, onPress }) {
  const [currentPosition, setCurrentPosition] = useState(0);

  const dateTimeUTC = zonedTimeToUtc(new Date(), 'America/Brasília');

  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.created_at), dateTimeUTC, {
      locale: pt,
      addSuffix: true,
    });
  }, [data.created_at, dateTimeUTC]);

  useEffect(() => {
    async function loadStatus() {
      if (data.start_date) {
        console.tron.log(data.start_date);
        setCurrentPosition(1);
      }
      if (data.start_date && data.end_date) {
        console.tron.log(data.end_date);
        setCurrentPosition(2);
      }
    }
    loadStatus();
  }, [data]);

  console.tron.log(data);

  const labels = ['Aguardando Retirada', 'Retirada', 'Entregue'];

  const customStyles = {
    stepIndicatorSize: 20,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 1,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#7D40E7',
    stepStrokeWidth: 1,
    stepStrokeFinishedColor: '#7D40E7',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#7D40E7',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#7D40E7',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#7D40E7',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 12,
    currentStepLabelColor: '#999999',
  };

  return (
    <Container>
      <Info>
        <Icon
          name="local-shipping"
          size={24}
          color="#7d40e7"
          style={{ paddingLeft: 15 }}
        />
        <Name>{`Encomenda ${data.id}`}</Name>
      </Info>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={currentPosition}
        labels={labels}
        stepCount={3}
      />
      <Content>
        <DateColumn>
          <TextTitle>Data</TextTitle>
          <TextContent>{dateParsed}</TextContent>
        </DateColumn>
        <CityColumn>
          <TextTitle>Cidade</TextTitle>
          <TextContent>{data.recipient.city}</TextContent>
        </CityColumn>
        <ButtonDetailView>
          <Text style={{ color: '#7d40e7', fontSize: 12 }} onPress={() => {}}>
            Ver detalhes
          </Text>
        </ButtonDetailView>
      </Content>
    </Container>
  );
}
