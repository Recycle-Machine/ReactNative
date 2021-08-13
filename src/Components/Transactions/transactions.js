import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from 'react-native'
import Colors from '../../res/Colors'


    const recycle = {
        uri: 'https://www.dropbox.com/s/i87i4x4z9ckdj3y/icons8-signo-de-reciclaje-30.png?raw=1',
    };
    const qr = {
        uri: 'https://www.dropbox.com/s/7gmjzmwvh6z1b65/icons8-codigo-qr-24.png?raw=1',
    };

class Transactions extends React.Component {

    handleQR = () => {
        this.props.navigation.replace('QR');
    }
    handleTransactions = () => {
        this.props.navigation.replace('transactionUser');
    }

    render() {
        return (
            <View style={styles.scoreContainer}>
                <View style={styles.scoreLayerColor}>
                    <Text style={styles.scoreInputText}>Transactions</Text>
                    <TouchableOpacity style={styles.scoreButton}>
                        <Text style={styles.scoreButtonText} onPress={this.handleQR}>Capture QR code</Text>
                        <ImageBackground style={styles.icon2} source={qr}></ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.scoreButton}>
                        <Text style={styles.scoreButtonText} onPress={this.handleTransactions}>Transactions</Text>
                        <ImageBackground style={styles.icon3} source={recycle}></ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scoreContainer: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    scoreInputText: {
        fontSize: 40,
        marginTop: '-40%',
        textAlign: 'center',
        color: Colors.white,
        marginBottom: 5,
    },
    scoreLayerColor: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.greenLight,
    },
    scoreButton: {
        backgroundColor: Colors.blueDark,
        color: Colors.white,
        width: '80%',
        height: '13%',
        padding: 15,
        marginTop: '8%',
        borderRadius: 50,
        borderWidth: 1,
    },
    scoreButtonText: {
        marginTop: '2%',
        marginLeft: '30%',
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.white,
    },
    icon1: {
        width: '45%',
        height: '90%',
        marginTop: '-15%',
        marginLeft: '4%'
    },
    icon2: {
        width: '35%',
        height: '80%',
        marginTop: '-15%',
        marginLeft: '7%'
    },
    icon3: {
        width: '45%',
        height: '90%',
        marginTop: '-15%',
        marginLeft: '4%'
    },
});

export default Transactions;