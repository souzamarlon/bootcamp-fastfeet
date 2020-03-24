import React, { useState } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, SubmitButton } from './styles';

import PagesBackground from '~/components/PagesBackground';
import Camera from '~/components/Camera';

import api from '~/services/api';

export default function ConfirmDelivery({ navigation }) {
  const [upload, setUpload] = useState([]);

<<<<<<< HEAD
  const { data } = route.params;
=======
  const data = navigation.getParam('data');
>>>>>>> parent of 7156419... Upgrade the React navigation to version 5

  async function handleSubmit() {
    try {
      await api.put(`/deliveryman/${data.id}/deliveries`, {
        signature_id: upload.id,
        end_date: new Date(),
      });
      Alert.alert('Sucesso!', 'Foto da assinatura foi enviada com sucesso!');

      // console.tron.log(response.data);
    } catch (err) {
      if (!upload.id) {
        console.tron.log(upload.id);
        Alert.alert(
          'Falha ao enviar!',
          'Foto da assinatura não foi enviada, for favor envie uma foto!'
        );
      }
      if (upload.id) {
        Alert.alert(
          'Falha ao enviar!',
          'Erro ao tentar enviar a foto da assinatura!'
        );
        console.tron.log(err);
      }
    }
  }

  return (
    <>
      <PagesBackground>
        <Camera PackageId={data.id} onChange={setUpload} />
      </PagesBackground>
      <Container>
        <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
      </Container>
    </>
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
