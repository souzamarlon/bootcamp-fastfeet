import React, { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PagesBackground from '~/components/PagesBackground';
import api from '~/services/api';
import { Container, Form, TInput, SubmitButton } from './styles';

export default function Problems({ navigation }) {
  const [description, setDescription] = useState('');
  const { id } = navigation.getParam('data');

  async function handleSubmit() {
    try {
      const response = await api.post(`/delivery/${id}/problems`, {
        description,
      });
      Alert.alert('Sucesso!', 'Seu problema foi cadastrado com sucesso!');

      console.tron.log(response.data);
    } catch (err) {
      Alert.alert('Falha!', 'Erro ao tentar enviar seu problema!');
      console.tron.log(err);
    }
  }

  return (
    <PagesBackground>
      <Container>
        <Form>
          <TInput
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Inclua aqui o problema que ocorreu na entrega."
            multiline
            numberOfLines={50}
            maxLength={500}
            value={description}
            onChangeText={setDescription}
          />
        </Form>
        <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
      </Container>
    </PagesBackground>
  );
}

Problems.navigationOptions = ({ navigation }) => ({
  title: 'Informar problema',
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
