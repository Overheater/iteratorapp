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
export default class Value extends  Component
{
    render() {
        return (
        <Text style={styles.countText}>{this.props.countval}</Text>
                );
            }
}