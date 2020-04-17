import React, { useState } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { Container, Content, SubmitButton } from './styles';
import Camera from '~/components/Camera';

import api from '~/services/api';

export default function ConfirmDelivery({ navigation }) {
  const [upload, setUpload] = useState([]);

  const data = navigation.getParam('data');

  async function handleSubmit() {
    try {
      await api.put(`/deliveryman/${data.id}/deliveries`, {
        signature_id: upload.id,
        end_date: new Date(),
      });
      Alert.alert('Sucesso!', 'Foto da assinatura foi enviada com sucesso!');
      navigation.navigate('Dashboard');

      // console.tron.log(response.data);
    } catch (err) {
      if (!upload.id) {
        // console.tron.log(upload.id);
        Alert.alert(
          'Falha ao enviar!',
          'Não foi possível confirmar a entrega porque não foi enviado a foto!'
        );
      }
      if (upload.id) {
        Alert.alert('Falha ao enviar!', 'Erro ao confirmar a entrega!');
        // console.tron.log(err);
      }
    }
  }

  return (
    <>
      <Container>
        <Content>
          <Camera onChange={setUpload} />
        </Content>
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

ConfirmDelivery.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    data: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
