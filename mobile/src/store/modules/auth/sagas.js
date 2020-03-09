import { Alert } from 'react-native';

import { takeLatest, call, put, all } from 'redux-saga/effects';
// import { toast } from 'react-toastify';

// import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `deliverersauth/${id}`);

    const { name, email, created_at, avatar } = response.data;

    // yield delay(100000);

    // eslint-disable-next-line prefer-object-spread
    const profile = Object.assign({
      id,
      name,
      email,
      created_at,
      avatar,
    });

    yield put(signInSuccess(profile));

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert('Falha na autenticação', 'Authentication failure!');
    console.tron.log(err);
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
