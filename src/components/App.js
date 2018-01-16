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
import IterateUpButton from './IterateUpButton';
import styles from '../styles/AppStyles';

// enables the state function for iterating the number after pressing either button
class Value extends  Component
{
    //constructs the prop which displays the current value
    constructor(props)
    {
        super(props);
        this.state={ value:0 }
    }
    iterateup = () => {
        this.setState({
            value: this.state.count + 1
        })
    };

    iteratedown = () =>{
            this.setState({
                value: this.state.count-1
            });
    };
}

export default class App extends Component<{}> {


}



