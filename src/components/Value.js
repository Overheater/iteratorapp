import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import styles from '../styles/AppStyles';
// enables the state function for iterating the number after pressing either button
class Value extends  Component
{
    //constructs the prop which displays the current value
    constructor(props)
    {
        super(props);
        this.state={ value:0 };
        this.iterateDown();
        this.iterateUp();
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