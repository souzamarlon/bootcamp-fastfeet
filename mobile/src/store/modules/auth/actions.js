export function signInRequest(id) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { id },
  };
}

export function signInSuccess(id, name, email) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { id, name, email },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}
// export function signOut() {
//   return {
//     type: '@auth/SIGN_OUT',
//   };
// }
