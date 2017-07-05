import React from 'react';
import {
    AppRegistry,
    Text,
} from 'react-native';

import { StackNavigator } from 'react-navigation';


//********define our screens */

class HomeScreen extends React.Component {

    static navigationoptions = {
        title: 'welcome'
    };

    render() {
        return <Text > Hello, Navigation! < /Text>;
    }



}


//************************** */
const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen }
})