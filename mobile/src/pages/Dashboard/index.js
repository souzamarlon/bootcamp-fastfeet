import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';

import { Container, Header, Avatar, Welcome, Name } from './styles';

export default function Dashboard() {
  const { profile } = useSelector(state => state.auth);

  console.tron.log(profile.name);
  return (
    <Container>
      <Header>
        <>
          <Avatar
            source={{
              uri: profile.avatar.url
                ? profile.avatar.url
                : `https://avatars.dicebear.com/v2/initials/${profile.name}.svg`,
            }}
          />
        </>
        <>
          <Welcome>Bem vindo de volta,</Welcome>
        </>
        <Name>{profile.name}</Name>
      </Header>
    </Container>
  );
}
