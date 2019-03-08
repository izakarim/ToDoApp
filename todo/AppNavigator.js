import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './Login';
import Home from './Home';

const MainNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
            headerLeft: false
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home'
        }
    },
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
