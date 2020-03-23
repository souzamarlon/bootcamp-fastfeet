import React, { useEffect, useState } from 'react';

import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import { Container, Title, Content, Text, Date } from './styles';
import PagesBackground from '~/components/PagesBackground';
import api from '~/services/api';

export default function ShowProblems({ navigation, route }) {
  const [problems, setProblems] = useState([]);
  const { data } = route.params;

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
  }, [data.id, data.start_date]);

  return (
    <PagesBackground>
      <Container>
        <Title>{`Encomenda ${data.id}`}</Title>
        {problems.map(item => (
          <Content
            key={item.id}
            data={item.description}
            onPress={() => {
              navigation.navigate('ProblemView', { data: item.description });
            }}
          >
            <Text>{item.description}</Text>
            <Date>{item.createdAt}</Date>
          </Content>
        ))}
      </Container>
    </PagesBackground>
  );
}

ShowProblems.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
