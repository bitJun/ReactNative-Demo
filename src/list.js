import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
import ListJson from '../mock/list';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ListJson
        };
    }
    render() {
        return (
            <View style={liststyles.container}>
                <FlatList
                    data={this.state.list}
                    renderItem={({item}) => 
                        <TouchableHighlight style={liststyles.listitem}  onPress={() => this.props.navigation.push('Detail')}>
                            <View style={liststyles.list}>
                                <Image source={{uri: item.img}}  style={liststyles.img} />
                                <View style={liststyles.content}>
                                    <Text style={liststyles.item}>{item.key}</Text>
                                    <Text style={liststyles.title}>{item.title}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    }
                />
            </View>
        );
    }
}
const liststyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    listitem: {
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    list: {
        position: 'relative'
    },
    img: {
        position: 'absolute',
        left: 0,
        width: 80,
        height: 80
    },
    item: {
        padding: 10,
        fontSize: 16,
        color: '#000000'
    },
    title: {
        padding: 10,
        fontSize: 14,
        color: '#999999',
        // alignItems: 'flex-start'
    },
    clearfix: {
        zIndex: 1
    },
    content: {
        paddingLeft: 90,
    }
})