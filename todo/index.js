/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore from './store';
//
const store = configureStore();

// export default class todo {
//     render() {
//         return (
//             <App/>
//         );
//     }
// }

const TestApp = () => (
    <Provider store = { store }>
        <App />
    </Provider>
);


AppRegistry.registerComponent('todo', () => TestApp);
