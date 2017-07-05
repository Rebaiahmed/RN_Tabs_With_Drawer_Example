/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button ,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";

export default class HomeScreen extends Component {


  static navigationoptions = {
      title: 'welcome'
  };





  render() {
    const { navigate } = this.props.navigation ;
    console.log("hello world ")
      return (
        <View>
          <Text>
            hello Chat
            </Text>
            <Button
              onPress ={ ()=> navigate('chat',{ user: 'Lucy' })}
               title="Chat with Lucy" />

        </View>
      )
  }

}


//***********define another Screen*****************//
class ChatScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
      title: `Chat with ${navigation.state.params.user}`,
    });

render()
{

  const { params} = this.props.navigation.state ;
  return(
    <View>
      <Text>Chat with Lucy { params.user }</Text>
    </View>
  )
}



}



const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    chat  :{ screen : ChatScreen},
})

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
