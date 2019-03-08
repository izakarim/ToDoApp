// import { LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_FAILED } from '../actions/types';
//
// const initialState = {
//     user: null,
//     loading: false,
//     error: '',
// };
//
// const textReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case LOGIN_ATTEMPT:
//             return {
//                 ...initialState,
//                 loading: true
//             };
//
//         case LOGIN_FAILED:
//             return {
//                 ...initialState,
//                 loading: false,
//                 error: action.error
//             };
//
//         case LOGIN_SUCCESS:
//             return {
//                 ...initialState,
//                 loading: false,
//                 user: action.user
//             };
//
//         default:
//             return state;
//     }
// };
//
// export default authReducer;