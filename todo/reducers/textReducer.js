import { ADD_TEXT, REMOVE_TEXT } from '../actions/types';

const initialState = {
    username: null,
    text: '',
    index: 0,
};

const textReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TEXT:
            return {
                ...state,
                text: [action.text, ...state.text]
            };

        case REMOVE_TEXT:
            return{
                text: [...state.text.splice(0, action.index),
                       ...state.text.splice(1)
                ],
            };

        default:
            return state;
    }
};

export default textReducer;