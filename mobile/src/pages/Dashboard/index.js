import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';

import { Container, Header, Avatar } from './styles';

export default function Dashboard() {
  const { profile } = useSelector(state => state.auth);

  console.tron.log(profile.avatar.url);
  return (
    <Container>
      <Header>
        <Avatar
          source={{
            uri: profile.avatar.url,
          }}
        />
        <Text>test</Text>
      </Header>
    </Container>
  );
}
