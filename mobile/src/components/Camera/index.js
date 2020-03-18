import React, { useRef, useState } from 'react';

import { Alert, ActivityIndicator } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, CameraButton, CameraIcon, SignImage } from './styles';
import api from '~/services/api';

export default function Camera({ onChange, PackageId }) {
  const [loading, setLoading] = useState(false);

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

      const dataForm = new FormData();
      dataForm.append('file', {
        uri: data.uri,
        name: `Signature_Package${PackageId}.jpg`,
        type: 'image/*',
      });

      setLoading(true);
      const response = await api.post('files', dataForm);

      if (response) {
        const { id, url } = response.data;
        onChange({ id, url });
        Alert.alert('Foto tirada com sucesso!');

        setLoading(false);
      }
    }
  }

  return (
    <>
      <Container>
        <RNCamera
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
        {loading ? <ActivityIndicator size="small" color="#000" /> : null}
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
