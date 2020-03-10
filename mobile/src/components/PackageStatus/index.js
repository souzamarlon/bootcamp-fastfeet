import React, { useMemo, useState } from 'react';
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

  const labels = ['Aguardando Retirada', 'Retirada', 'Entregue'];

  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 1,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#7D40E7',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#7D40E7',
    stepStrokeUnFinishedColor: '#aaaaaa',
    // stepStrokeUnFinishedColor: '#aaaaaa',

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
    labelSize: 13,
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
