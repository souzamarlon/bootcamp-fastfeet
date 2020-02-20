import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
    try {
        const { name } = payload.data;

        // const profile = { name };
        // console.tron.log(profile);
        const response = yield call(api.put, 'users', name);

        toast.success('Sucesso ao atualizar os dados!');
        yield put(updateProfileSuccess(response.data));
    } catch (err) {
        toast.error('Erro ao atualizar os dados!');

        yield put(updateProfileFailure());
    }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
