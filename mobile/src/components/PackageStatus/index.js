import React, { useMemo, useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import 'react-native-gesture-handler';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StepIndicator from '~/components/StepIndicator';

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

  const dateParsed = useMemo(() => {
    return format(parseISO(data.created_at), 'dd/MM/yyyy', {
      locale: pt,
      addSuffix: true,
    });
  }, [data.created_at]);

  useEffect(() => {
    async function loadStatus() {
      if (data.start_date) {
        setCurrentPosition(1);
      }
      if (data.start_date && data.end_date) {
        setCurrentPosition(2);
      }
    }
    loadStatus();
  }, [data]);

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
      <StepIndicator currentPosition={currentPosition} />
      <Content>
        <DateColumn>
          <TextTitle>Data</TextTitle>
          <TextContent>{dateParsed}</TextContent>
        </DateColumn>
        <CityColumn>
          <TextTitle>Cidade</TextTitle>
          <TextContent>{data.recipient.city}</TextContent>
        </CityColumn>
        <ButtonDetailView onPress={onPress}>
          <Text style={{ color: '#7d40e7', fontSize: 12 }}>Ver detalhes</Text>
        </ButtonDetailView>
      </Content>
    </Container>
  );
}

PackageStatus.propTypes = {
  data: PropTypes.shape({
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    created_at: PropTypes.string,
    id: PropTypes.number,
    recipient: PropTypes.shape({
      city: PropTypes.string,
    }),
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};
