import React, { useState, useEffect } from 'react';
// import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';
import api from '~/services/api';

import PackageStatus from '~/components/PackageStatus';
import {
  Container,
  HeaderContent,
  Header,
  Avatar,
  Welcome,
  Name,
  LogoutButton,
  Title,
  HeaderStatus,
  StatusRow,
  List,
} from './styles';

export default function Dashboard() {
  const [packages, setPackages] = useState([]);
  const [refreshList, setRefreshList] = useState(false);
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.auth);

  useEffect(() => {
    async function loadPackages() {
      const response = await api.get(`deliveryman/${profile.id}/deliveries`);

      setPackages(response.data);

      setRefreshList(false);
    }
    loadPackages();
  }, [profile.id, refreshList]);

  function handleLogout() {
    dispatch(signOut());
  }

  async function loadPage() {
    setRefreshList(true);
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
      <HeaderStatus>
        <Title>Entregas</Title>
        <StatusRow> Pendentes </StatusRow>
        <StatusRow> Entregues </StatusRow>
      </HeaderStatus>
      <List
        data={packages}
        refreshing={refreshList}
        onRefresh={loadPage}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <PackageStatus data={item} />}
      />
    </Container>
  );
}
