import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import ListJson from '../mock/list';
import GoodsDetail from '../mock/detail';
import Dimensions from 'Dimensions';
var { width, height } = Dimensions.get('window');

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deatil: GoodsDetail
        };
    }
    render() {
        return (
            <View className="iconfont icon-jiudian" style={detailtyles.container}>
                <Image source={{uri: this.state.deatil.img}}  style={detailtyles.img} />
                <Text style={detailtyles.price}>
                    ￥{this.state.deatil.minprice}-{this.state.deatil.maxprice}
                </Text>
                <Text style={detailtyles.title}>{this.state.deatil.title}</Text>
            </View>
        );
    }
}
const detailtyles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        paddingTop: 0
    },
    img: {
        width: width,
        height: 300
    },
    price: {
        paddingLeft: 10,
        color: '#ff0000',
        fontSize: 16
    },
    title: {
        fontSize: 14,
        height: 25,
        lineHeight: 25,
        paddingLeft: 10,
        borderBottomColor: '#000',
        borderBottomWidth: 1
    }
})