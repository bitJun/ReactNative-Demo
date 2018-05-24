import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native'; 
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Dimensions from 'Dimensions';
import List from './list';
import Detail from './detail';
const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};
  
const FirstRoute = () => <List />;
const SecondRoute = () => <Detail />;
  
export default class TabViewExample extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: '日常用车' },
            { key: 'second', title: '项目合作' },
        ],
    };
  
    _handleIndexChange = index => this.setState({ index });
  
    _renderHeader = props => <TabBar {...props} />;
  
    _renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });
  
    render() {
        return (
            <TabViewAnimated
            navigationState={this.state}
            renderScene={this._renderScene}
            renderHeader={this._renderHeader}
            onIndexChange={this._handleIndexChange}
            initialLayout={initialLayout}
            style={styles.bg}
            />
      );
    }
}
  
const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#ffffff'
    },
    container: {
        flex: 1,
    },
});