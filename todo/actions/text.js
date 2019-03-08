import { ADD_TEXT, REMOVE_TEXT } from './types';

export const addText = text => {
    return {
        type: ADD_TEXT,
        text: text
    }
};

export const removeText = index => {
    return {
        type: REMOVE_TEXT,
        index: index
    }
};

// export function isLoading(bool:Boolean){
//     return{
//         type:'LOGIN_ATTEMPT',
//         isLoading:bool
//     }
// }
//
// export function loginSuccess(userData:Object){
//     return{
//         type:'LOGIN_SUCCESS',
//         userData
//     }
// }
//
// export function loginFailed(error:Object){
//     return{
//         type:'LOGIN_FAILED',
//         error
//     }
// }
//
// export function login(data:Object) {
//     return dispatch => {
//         dispatch(isLoading(true));
//         return fetch('https://my-mobile.althea.kr/index.php/rest/V1/integration/admin/token', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 "email": data.email,
//                 "password": data.password
//             })
//         })
//             .then((response) => {
//                 if (response.status < 300) {
//                     dispatch(isLoading(false));
//                     response.json().then((responseJSON) => {
//                         console.log("responseJSON", responseJSON);
//                         dispatch(loginSuccess(responseJSON))
//                     })
//                 }
//                 else {
//                     response.json().then((responseJSON) => {
//                         console.log("responseJSON", responseJSON);
//                         dispatch(isLoading(false));
//                         dispatch(loginFailed(responseJSON.message))
//                     })
//                 }
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 dispatch(isLoading(false));
//                 dispatch(loginFailed(error))
//             })
//     }
// }

// export const addPassword = password => {
//     return {
//         type: ADD_PASSWORD,
//         password: password
//     }
// };

