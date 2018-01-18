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
                style={styles.buttonstuff}
                onPress={() => this.props.iterationbutton}

            ><Text>iterateinfo</Text></TouchableOpacity>
        );
    }
}