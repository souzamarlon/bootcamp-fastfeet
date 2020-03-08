import React, { useState } from 'react';
import { Image } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { Container, Form, FormInput, SubmitButton } from './styles';
import Background from '~/components/Background';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

export default function SignIn() {
  const dispatch = useDispatch();
  const [id, setId] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(id));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Informe seu ID de cadastro"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            // onSubmitEditing={() => passwordRef.current.focus()}
            value={id}
            onChangeText={setId}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Acessar
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
