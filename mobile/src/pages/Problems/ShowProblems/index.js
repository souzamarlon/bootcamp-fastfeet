import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Title, Content, Text, Date } from './styles';
import PagesBackground from '~/components/PagesBackground';
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
  }, [data.id, data.start_date]);

  return (
    <PagesBackground>
      <Container>
        <Title>{`Encomenda ${data.id}`}</Title>
        {problems.map(item => (
          <Content key={item.id}>
            <Text>{item.description}</Text>
            <Date>{item.createdAt}</Date>
          </Content>
        ))}
      </Container>
    </PagesBackground>
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
