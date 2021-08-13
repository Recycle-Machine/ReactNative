import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TouchableOpacity} from 'react-native';
import UserSession from '../../libs/sessions';
import { Link } from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import Http from '../../libs/http';


class QRreader extends Component {
 
  onSuccess = async (e) => {
    let user = await UserSession.instance.getUser();
    var transactionId = e.data;
    const username = toString(user.username);
    state = {
      form: { username: `${username}`},
    };
    console.log(transactionId);
    console.log(user.username);
    this.props.history.push('/transactionUser');
    
  };

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            Scan the QR code
            generated by the recycling machine
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Link to="/transactionUser">
            <Text style={styles.buttonText}>Got it!</Text>
            </Link>
          </TouchableOpacity>
        }
      />
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

AppRegistry.registerComponent('/scan', () => QRreader);

export default QRreader;
