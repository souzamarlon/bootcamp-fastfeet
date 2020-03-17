import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { RNCamera } from 'react-native-camera';

import { Container } from './styles';

import PagesBackground from '~/components/PagesBackground';
import api from '~/services/api';

export default function ConfirmDelivery({ navigation }) {
  // const data = navigation.getParam('data');
  const [flash, setFlash] = useState('off');
  const [zoom, setZoom] = useState(0);
  const [autoFocus, setAutoFocus] = useState('on');
  const [depth, setDepth] = useState(0);
  const [type, setType] = useState('back');
  const [permission, setPermission] = useState('undetermined');
  const cameraRef = useRef(null);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dummy: {
      backgroundColor: '#76e',
      height: 250,
      width: '100%',
      position: 'absolute',
      top: 0,
    },
    preview: {
      height: 500,
      width: 300,
      borderRadius: 4,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#76e',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 100,
      alignSelf: 'center',
      margin: 50,
    },
  });

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
        <View style={styles.container}>
          <View style={styles.dummy} />
          <RNCamera
            ref={cameraRef}
            style={styles.preview}
            type={type}
            flashMode={flash}
          />
        </View>
        <View
          style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}
        >
          <TouchableOpacity onPress={takePicture} style={styles.capture}>
            <Text style={{ fontSize: 14, color: '#fff' }}> Enviar </Text>
          </TouchableOpacity>
        </View>
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
