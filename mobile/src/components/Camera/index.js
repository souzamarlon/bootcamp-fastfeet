import React, { useRef, useState } from 'react';

import { StyleSheet, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, CameraLayout, CameraButton, CameraIcon } from './styles';
import api from '~/services/api';

export default function Camera() {
  const [upload, setUpload] = useState();

  const [flash, setFlash] = useState('off');
  const [zoom, setZoom] = useState(0);
  const [autoFocus, setAutoFocus] = useState('on');
  const [depth, setDepth] = useState(0);
  const [type, setType] = useState('back');
  const [permission, setPermission] = useState('undetermined');

  const cameraRef = useRef(null);

  async function takePicture() {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      Alert.alert('Foto tirada com sucesso!');

      const dataForm = new FormData();

      dataForm.append('file', {
        uri: data.uri,
        name: 'signature.jpg',
        type: 'image/*',
      });

      setUpload(dataForm);

      // const response = await api.post('files', dataForm);

      // console.tron.log(response.data);
    }
  }

  return (
    <>
      <Container>
        {/* <CameraLayout /> */}
        <RNCamera
          data-file={upload}
          ref={cameraRef}
          style={{
            marginTop: 400,
            height: 400,
            width: '100%',

            borderRadius: 4,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
          type={type}
          flashMode={flash}
        />
      </Container>

      <CameraButton onPress={() => takePicture()}>
        <CameraIcon>
          <Icon
            name="photo-camera"
            size={35}
            color="#FFF"
            style={{ alignSelf: 'center', marginTop: 24 }}
          />
        </CameraIcon>
      </CameraButton>
    </>
  );
}
