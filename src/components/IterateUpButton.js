import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity

} from 'react-native';
import styles from '../styles/AppStyles';
export default class IterateUpButton extends Component
{
    render()
    {
        return(
            <TouchableOpacity
            style={StyleSheet.flatten(styles.iterateup)}
            onPress={this.iterateup}/>
        );
    }
    iterateup()
    {
        this.setState
        (
            {
                count: this.state.count+1
            }
        )

    }
}