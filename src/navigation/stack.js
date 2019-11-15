//Import library
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

//Import Screens
import Login from '../screen/Login';
import Register from '../screen/Register'
import SearchScreen from '../screen/SearchScreen'

const InitialStack = createStackNavigator({
    LoginScreen: Login,
    RegisterScreen: Register,
    SearchScreen: SearchScreen,
}, {
    initialRouteName: 'LoginScreen',
    headerMode: 'none'
});

const AppContainer = createAppContainer(InitialStack);

export default AppContainer;
