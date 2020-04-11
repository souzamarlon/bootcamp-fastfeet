import React, { useRef, useState, useEffect } from 'react';

import { Alert, ActivityIndicator, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import ImageEditor from '@react-native-community/image-editor';
import { Container, CameraButton, CameraIcon } from './styles';
import api from '~/services/api';

export default function Camera({ onChange, PackageId }) {
  const [loading, setLoading] = useState(false);
  const [dataPic, setDataPic] = useState(false);

  const [flash, setFlash] = useState('off');
  const [zoom, setZoom] = useState(0.5);
  const [autoFocus, setAutoFocus] = useState('on');
  const [depth, setDepth] = useState(0);
  const [type, setType] = useState('back');
  const [permission, setPermission] = useState('undetermined');

  const cameraRef = useRef(null);

  async function takePicture() {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      await cameraRef.current.takePictureAsync(options).then(capturedImg => {
        const uriName = capturedImg.uri.split('/');
        const name = uriName[uriName.length - 1];

        const { uri, width, height } = capturedImg;

        const cropData = {
          offset: { x: 0, y: 0 },
          size: { width, height },
          displaySize: { width: 300, height: 210 },
        };
        ImageEditor.cropImage(uri, cropData).then(
          url => {
            setDataPic({
              name,
              url,
            });
          },
          error => {
            console.error('Error resizing image: ', error.getMessage());
          }
        );
      });
    }
  }

  useEffect(() => {
    async function sendPicture() {
      if (dataPic) {
        setLoading(true);
        console.tron.log('dataPic:', dataPic);
        const dataForm = new FormData();
        dataForm.append('file', {
          uri: dataPic.url,
          name: dataPic.name,
          type: 'image/*',
        });

        const response = await api.post('files', dataForm);

        if (response) {
          const { id, url } = response.data;
          onChange({ id, url });
          Alert.alert('Upload da foto efetuado com sucesso!');

          setLoading(false);
        }
      }
    }

    sendPicture();
    // eslint-disable-next-line
  }, [dataPic]);

  return (
    <>
      <Container>
        <RNCamera
          ref={cameraRef}
          style={{
            flex: 1,
            top: 250,
            marginRight: 20,
            marginLeft: 20,
            // height: 200,
            // width: 350,
          }}
          autoFocus={autoFocus}
          type={type}
          flashMode={flash}
          zoom={zoom}
        />
      </Container>

      <CameraButton enabled={!loading} onPress={() => takePicture()}>
        {loading ? (
          <>
            <ActivityIndicator size="large" color="#fff" />
            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 10 }}>
              Carregando a foto, por favor aguarde!
            </Text>
          </>
        ) : (
          <CameraIcon>
            <Icon
              name="photo-camera"
              size={35}
              color="#FFF"
              style={{ alignSelf: 'center', marginTop: 24 }}
            />
          </CameraIcon>
        )}
      </CameraButton>
    </>
  );
}

Camera.propTypes = {
  onChange: PropTypes.func.isRequired,
  PackageId: PropTypes.number.isRequired,
};
