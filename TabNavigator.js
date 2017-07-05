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


class RecentChatsSCreen extends Component
{
  render() {
    <View>
  return <Text>List of recent chats</Text>
    <Button
    onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
    title="Chat with Lucy"
  />

</View>

}
}

//*****************//
class AllContactsScreen extends Component
{
  render() {
    return <Text>List of all contacts</Text>
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


//************************//
const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

MainScreenNavigator.navigationOptions ={
  title: 'My Chats',
}

const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});


AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
