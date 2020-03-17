import React, { useRef, useState } from 'react';

import { StyleSheet, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, CameraLayout, CameraButton, CameraIcon } from './styles';

export default function Camera() {
  const [flash, setFlash] = useState('off');
  const [zoom, setZoom] = useState(0);
  const [autoFocus, setAutoFocus] = useState('on');
  const [depth, setDepth] = useState(0);
  const [type, setType] = useState('back');
  const [permission, setPermission] = useState('undetermined');
  const cameraRef = useRef(null);

  const styles = StyleSheet.create({
    capture: {
      flex: 0,
      backgroundColor: '#76e',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 100,
      alignSelf: 'center',
      // margin: 50,
    },
  });

  async function takePicture() {
    console.tron.log('teste');
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      Alert.alert(data.uri);
    }
  }
  return (
    <>
      <Container>
        {/* <CameraLayout /> */}
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
