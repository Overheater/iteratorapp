/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import IterateButton from './IterateButton';
import styles from '../styles/AppStyles';



export default class App extends Component<{}> {
    constructor(props)
    {
        super(props);
        this.state={ value:0 };
        this.iterateDown();
        this.iterateUp();
    }

    render() {
    return (
        <View style={styles.container}>
            <Text> {this.state.value} </Text>
            <IterateButton   onPress={this.iterateUp}/>
            <Text>hey2</Text>
            <IterateButton   onPress={this.iterateDown} />
        </View>
    );
}
    iterateUp() {
        iterateup = (() => {
            this.setState({
                value: this.state.value + 1
            })
        });
    }
    iterateDown() {
        iteratedown = (() => {
            this.setState({
                value: this.state.value - 1
            });
        });
    }
}





