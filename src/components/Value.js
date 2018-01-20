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
//got the follow ERROR "Element type is invalid: expected a string or class/function but got: object." Fixed by adding export default  below
export default class Value extends  Component
{
    render() {
        return (
        <Text style={styles.countText}>{this.props.countval}</Text>
                );
            }
}