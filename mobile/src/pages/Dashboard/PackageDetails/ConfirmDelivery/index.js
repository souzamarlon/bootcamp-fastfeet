import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { RNCamera } from 'react-native-camera';

import { Container, CameraLayout } from './styles';

import PagesBackground from '~/components/PagesBackground';
import Camera from '~/components/Camera';

import api from '~/services/api';

export default function ConfirmDelivery({ navigation }) {
  const cameraRef = useRef(null);

  // const data = navigation.getParam('data');

  async function takePicture() {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      Alert.alert(data.uri);
    }
  }
  return (
    <PagesBackground>
      <Container>
        <Camera ref={cameraRef} name="avatar" />
        {/* <View
          style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}
        >
          <TouchableOpacity
            onPress={takePicture}
            style={{
              flex: 1,
              backgroundColor: '#7D40E7',
              borderRadius: 5,
              padding: 15,
              // paddingHorizontal: 20,
              alignSelf: 'center',
              margin: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#FFF',
                textAlign: 'center',
              }}
            >
              Enviar
            </Text>
          </TouchableOpacity>
        </View> */}
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
