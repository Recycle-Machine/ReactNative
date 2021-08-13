import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TouchableOpacity} from 'react-native';
import UserSession from '../../libs/sessions';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import Http from '../../libs/http';

class transactionUser extends Component {
 
  render() {
    return (
    <div className={styles.centerText}>
    <h1>Hello</h1>
    </div>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});


export default transactionUser;
