import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity

} from 'react-native';
import styles from '../styles/AppStyles';
export default class IterateUpButton extends Component {
    render() {
        return (
            <TouchableOpacity
                style={this.props.buttonstyle}
                onPress={() => this.props.iterationbutton()}>
                <Text style={styles.buttontext}>{this.props.buttonName}</Text></TouchableOpacity>
        );
    }
}