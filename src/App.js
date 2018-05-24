import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import List from './list';
import Detail from './detail';
import Home from './home';
export default createStackNavigator({
  Home: {
    screen: List
  },
  Detail: {
    screen: Detail
  }
});
// export default class projectList extends React.Component {
//     render() {
//         return (
//           <View style={styles.container}>
//             <List></List>
//           </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   }
// });
