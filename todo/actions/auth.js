// import { LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_FAILED } from './types';
//
// import { AsyncStorage } from 'react-native';
//
// const onLoginSuccess = (dispatch, user, token) => {
//
//     AsyncStorage.setItem('app_token',token)
//         .then(() => {
//             dispatch({ type: LOGIN_SUCCESS, user })
//         });
// };
//
// const onLoginFailed = (dispatch, errorMessage) => {
//     dispatch({ type: LOGIN_FAILED, error: errorMessage})
// };
//
//
// const handleResponse = (dispatch, data) => {
//     if (!data.success) {
//         onLoginFailed(dispatch, data.message);
//     }else {
//         onLoginSuccess(dispatch, data.user, data.token)
//     }
// };
//
// export const loginUser = ({ username, password }) => {
//     return (dispatch) => {
//         dispatch({ type: LOGIN_ATTEMPT });
//
//         AsyncStorage.getItem('app_token')
//             .then(token => {
//                 //Call the back-end api
//                 const url = 'https://my-mobile.althea.kr/index.php/rest/V1/integration/customer/token';
//                 const config = {
//                     headers: {'Authorization': `Bearer ${token}`}
//                 }
//             });
//                 // { email: username, password })
//             // .then(resp => handleResponse(dispatch, resp.data))
//             // .catch(error => console.error(error));
//
//     };
// };
