import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';
import {
  Container,
  HeaderContent,
  Header,
  Avatar,
  Welcome,
  Name,
  LogoutButton,
  Title,
  DeliveryStatus,
  StatusRow,
} from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.auth);

  function handleLogout() {
    dispatch(signOut());
  }

  console.tron.log(profile.name);
  return (
    <Container>
      <HeaderContent>
        <Avatar
          source={{
            uri: profile.avatar.url
              ? profile.avatar.url
              : `https://avatars.dicebear.com/v2/initials/${profile.name}.svg`,
          }}
        />

        <Header>
          <Welcome>Bem vindo de volta,</Welcome>
          <Name>{profile.name}</Name>
          <LogoutButton>
            <Icon
              name="exit-to-app"
              size={24}
              color="#E74040"
              // style={{ position: 'absolute', left: 200, paddingTop: 30 }}
              onPress={handleLogout}
            />
          </LogoutButton>
        </Header>
      </HeaderContent>
      <DeliveryStatus>
        <Title>Entregas</Title>
        <StatusRow> Pendentes </StatusRow>
        <StatusRow> Entregues </StatusRow>
      </DeliveryStatus>
    </Container>
  );
}
