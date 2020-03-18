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

  async function handleSubmit() {
    try {
      await api.put(`/deliveryman/${data.id}/deliveries`, {
        signature_id: upload.id,
        end_date: new Date(),
      });
      Alert.alert('Sucesso!', 'Foto da assinatura foi enviada com sucesso!');
      // console.tron.log(response.data);
    } catch (err) {
      Alert.alert('Falha!', 'Erro ao tentar enviar a foto da sua assinatura!');
      console.tron.log(err);
    }
  }

  return (
    <PagesBackground>
      <Container>
        <Camera ref={cameraRef} PackageId={data.id} onChange={setUpload} />
        <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
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
