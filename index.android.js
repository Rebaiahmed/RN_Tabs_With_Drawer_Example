/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React from 'react';
 import { Button, Platform, ScrollView, StyleSheet,AppRegistry } from 'react-native';
 import { TabNavigator, DrawerNavigator } from 'react-navigation';
 import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
 import SimpleTabs from './SimpleTabs';
 import StacksOverTabs from './StacksOverTabs';


//******************************//

const SimpleApp = DrawerNavigator({
  SimpleTabs: {
    screen: SimpleTabs,
    navigationOptions: {
      drawer: () => ({
        label: 'Simple Tabs',
        icon: ({ tintColor }) => (
          <MaterialIcons
            name="filter-1"
            size={24}
            style={{ color: tintColor }}
          />
        ),
      }),
    },
  },
  StacksOverTabs: {
    screen: StacksOverTabs,
    navigationOptions: {
      drawer: () => ({
        label: 'Stacks Over Tabs',
        icon: ({ tintColor }) => (
          <MaterialIcons
            name="filter-2"
            size={24}
            style={{ color: tintColor }}
          />
        ),
      }),
    },
  },
});


//************************//
const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});


AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
