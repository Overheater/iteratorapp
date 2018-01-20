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
    render() {
    return (
        <View style={styles.container}>
            <Text style={styles.countText}>{this.state.value}</Text>
            <Text style={styles.countText}> </Text>
            <IterateButton buttonstyle={styles.iterateup} buttonName='iterate up' iterationbutton={()=>this.iterateUp()}/>
            <Text style={styles.countText}> </Text>
            <IterateButton buttonstyle={styles.iteratedown} buttonName='iterate down'  iterationbutton={()=>this.iterateDown()} />
        </View>
    );
}

}





