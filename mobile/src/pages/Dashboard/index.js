import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
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
  StatusButton,
  List,
} from './styles';

export default function Dashboard({ navigation }) {
  const [packages, setPackages] = useState([]);
  const [refreshList, setRefreshList] = useState(false);
  const [delivered, setDelivered] = useState(false);

  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.auth);

  useEffect(() => {
    async function loadPackages() {
      if (delivered) {
        const response = await api.get(
          `deliveryman/${profile.id}/deliveries/`,
          {
            params: { q: true },
          }
        );

        setPackages(response.data);
      }
      if (!delivered) {
        const response = await api.get(`deliveryman/${profile.id}/deliveries`);

        setPackages(response.data);
      }
      setRefreshList(false);
    }
    loadPackages();
  }, [delivered, profile.id, refreshList]);

  function handleLogout() {
    dispatch(signOut());
  }

  async function loadPage() {
    setRefreshList(true);
  }

  async function packagesFilter(data) {
    if (data) {
      setDelivered(true);
    }
    if (!data) {
      setDelivered(false);
    }
  }

  return (
    <Container>
      <HeaderContent>
        <Avatar
          source={{
            uri: profile.avatar.url
              ? profile.avatar.url
              : `https://api.adorable.io/avatar/50/${profile.name}.png`,
          }}
        />
        <Header>
          <Welcome>Bem vindo de volta,</Welcome>
          <Name>{profile.name}</Name>
        </Header>
        <LogoutButton>
          <Icon
            name="exit-to-app"
            size={24}
            color="#E74040"
            // style={{ position: 'absolute', left: 200, paddingTop: 30 }}
            onPress={handleLogout}
          />
        </LogoutButton>
      </HeaderContent>
      <HeaderStatus>
        <Title>Entregas</Title>
        <StatusButton
          onPress={() => {
            packagesFilter(false);
          }}
        >
          <Text
            style={{
              color: !delivered ? '#7D40E7' : '#999999',
              fontWeight: 'bold',
              fontSize: 12,
              textAlign: 'right',
            }}
          >
            Pendentes
          </Text>
        </StatusButton>
        <StatusButton
          onPress={() => {
            packagesFilter(true);
          }}
        >
          <Text
            style={{
              color: delivered ? '#7D40E7' : '#999999',
              fontWeight: 'bold',
              fontSize: 12,
              textAlign: 'right',
              paddingRight: 5,
            }}
          >
            Entregues
          </Text>
        </StatusButton>
      </HeaderStatus>
      <List
        data={packages}
        refreshing={refreshList}
        onRefresh={loadPage}
        keyExtractor={item => String(item.id)}
        renderItem={({ item: data }) => (
          <PackageStatus
            data={data}
            onPress={() => {
              navigation.navigate('PackageDetails', { data });
            }}
          />
        )}
      />
    </Container>
  );
}
Dashboard.navigationOptions = {
  headerShown: false,
  headerTransparent: true,
};
