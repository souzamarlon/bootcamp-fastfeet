import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Container, SubmitButton } from './styles';

import PagesBackground from '~/components/PagesBackground';
import Camera from '~/components/Camera';

import api from '~/services/api';

export default function ConfirmDelivery({ navigation, route }) {
  const [upload, setUpload] = useState([]);

  const { data } = route.params;
  console.tron.log(upload);

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
          'Não foi possível confirmar a entrega porque não foi enviado a foto!'
        );
      }
      if (upload.id) {
        Alert.alert('Falha ao enviar!', 'Erro ao confirmar a entrega!');
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
