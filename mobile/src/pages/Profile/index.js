import React, { useMemo } from 'react';
import { parseISO, format } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

import pt from 'date-fns/locale/pt';

import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Avatar, Name, Text, LogoutButton } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.auth);

  const dateParsed = useMemo(() => {
    return format(parseISO(profile.created_at), 'dd/MM/yyyy', {
      locale: pt,
      addSuffix: true,
    });
  }, [profile.created_at]);

  function handleLogout() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Avatar
        source={{
          uri: profile.avatar.url
            ? profile.avatar.url
            : `https://avatars.dicebear.com/v2/initials/${profile.name}.svg`,
        }}
      />
      <Name>Nome completo</Name>
      <Text>{profile.name}</Text>
      <Name>Email</Name>
      <Text>{profile.email}</Text>
      <Name>Data de cadastro</Name>
      <Text>{dateParsed}</Text>

      <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
