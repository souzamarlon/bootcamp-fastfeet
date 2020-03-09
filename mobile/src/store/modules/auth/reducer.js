import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};
export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@auth/SIGN_IN_SUCCESS': {
        draft.email = action.payload.email;
        draft.name = action.payload.name;
        draft.id = action.payload.id;
        draft.created_at = action.payload.created_at;
        draft.avatar = action.payload.avatar;
        draft.signed = true;
        draft.loading = false;
        break;
      }

      case '@auth/SIGN_IN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }

      default:
    }
  });
}
