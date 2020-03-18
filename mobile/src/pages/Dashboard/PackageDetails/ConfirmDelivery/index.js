import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { RNCamera } from 'react-native-camera';

import { Container, SubmitButton } from './styles';

import PagesBackground from '~/components/PagesBackground';
import Camera from '~/components/Camera';

import api from '~/services/api';

export default function ConfirmDelivery({ navigation }) {
  const [upload, setUpload] = useState({});

  const cameraRef = useRef(null);

  const data = navigation.getParam('data');

  async function handleSubmit({ data }) {
    console.tron.log(upload);

    // try {
    //   const response = await api.post(`students/${id}/help-orders`, {
    //     question,
    //   });
    //   Alert.alert('Sucesso!', 'Pergunta realizada com sucesso!');
    //   console.tron.log(response.data);
    // } catch (err) {
    //   Alert.alert('Falha!', 'Erro ao tentar enviar sua pergunta!');
    //   console.tron.log(err);
    // }
  }

  return (
    <PagesBackground>
      <Container>
        <Camera ref={cameraRef} value={setUpload} />
        <SubmitButton onPress={handleSubmit}>Enviar pedido</SubmitButton>
      </Container>
    </PagesBackground>
  );
}

ConfirmDelivery.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar entrega',
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
