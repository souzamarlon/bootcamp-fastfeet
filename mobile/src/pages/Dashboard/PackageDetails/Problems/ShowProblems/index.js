import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import { Container, Title, List } from './styles';

import ProblemList from '~/components/ProblemList';

import api from '~/services/api';

export default function ShowProblems({ navigation }) {
  const [problems, setProblems] = useState([]);
  const data = navigation.getParam('data');

  useEffect(() => {
    async function loadPackageProblems() {
      const response = await api.get(`/delivery/${data.id}/problems`);

      const problemsList = response.data.map(item => ({
        ...item,
        createdAt: format(parseISO(item.createdAt), 'dd/MM/yyyy', {
          locale: pt,
        }),
      }));

      setProblems(problemsList);
    }

    loadPackageProblems();
  }, [data.id]);

  return (
    <>
      <Container>
        <Title>{`Encomenda ${data.id}`}</Title>

        <List
          data={problems}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ProblemList
              data={item}
              onPress={() => {
                navigation.navigate('ReadProblem', { item });
              }}
            />
          )}
        />
      </Container>
    </>
  );
}

ShowProblems.navigationOptions = ({ navigation }) => ({
  title: 'Visualizar problemas',
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

ShowProblems.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
    getParam: PropTypes.func,
    data: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
