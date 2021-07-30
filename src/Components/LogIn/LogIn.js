import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
} from 'react-native'
import Colors from '../../res/Colors'

    const imageBackground = {
        uri: 'https://www.dropbox.com/s/43mkiz2sqxcdwcj/tree-plant.png?raw=1',
    };
    const emailImage = {
        uri: 'https://www.dropbox.com/s/oixlggx2qi8n5hk/e-mail.png?raw=1',
    };
    const lockImage = {
        uri: 'https://www.dropbox.com/s/utr2u7j6aoktlp3/lock.png?raw=1',
    };

class LogIn extends React.Component {
    handlePress = () => {
        this.props.navigation.navigate('Land');
    };

    render() {
        return(
            <ScrollView style={styles.loginContainer}>
                <View style={styles.layerColor}>
                    <ImageBackground source={imageBackground} style={styles.image}>
                        <View style={styles.loginBackground}>
                            <View style={styles.form}>
                                <Text style={styles.loginInputText}>User Login</Text>
                                <TextInput style={styles.loginInput} placeholder={'Email'}></TextInput>
                                <ImageBackground style={styles.loginIcon} source={emailImage}></ImageBackground>
                                <TextInput style={styles.loginInput1} placeholder={'Password'}></TextInput>
                                <ImageBackground style={styles.loginIcon1} source={lockImage}></ImageBackground>
                                <TouchableOpacity style={styles.loginButton} onPress={this.handlePress}>
                                <Text style={styles.loginButtonText}>Login</Text>
                                </TouchableOpacity>
                                <Text style={styles.loginInputTextBot}>Forgot username/password?</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    loginContainer:{
        flex: 1,
    },
    loginBackground: {
        opacity: 0.85,
        backgroundColor: Colors.whiteLight,
        width: '80%',
        height: '65%',
        marginTop: '45%',
        borderRadius: 20,
        borderColor: Colors.whiteLight,
        borderWidth: 4,
        marginVertical: 400,
    },
    layerColor: {
        flex: 2,
        backgroundColor: Colors.greenLight,
    },
    image: {
        height: '60%',
        width: '100%',
        marginTop: '30%',
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        paddingHorizontal: 20,
    },
    loginInput: {
        marginTop: '10%',
        height: '18%',
        fontSize: 25,
        color: Colors.black,
        paddingVertical: 5,
        paddingHorizontal: 30,
        paddingLeft: 100,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: Colors.black,
    },
    loginInput1: {
        marginTop: '-20%',
        height: '18%',
        fontSize: 25,
        color: Colors.black,
        paddingVertical: 5,
        paddingHorizontal: 30,
        paddingLeft: 100,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: Colors.black,
    },
    loginInputText: {
        fontSize: 30,
        textAlign: 'center',
        color: Colors.black,
        marginTop: '5%',
    },
    loginInputTextBot: {
        fontSize: 20,
        marginTop: '6%',
        textAlign: 'center',
        color: Colors.charade,
        marginBottom: 5,
        marginVertical: 100,
    },
    loginButton: {
        width: '100%',
        height: '17%',
        padding: 15,
        marginTop: '-15%',
        borderRadius: 30,
        backgroundColor: Colors.blueDark,
        borderWidth: 1,
    },
    loginButtonText: {
        marginTop: '-3%',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.white,
    },
    loginIcon: {
        width: '60%',
        height: '30%',
        marginTop: '-20%',
        marginLeft: '2%',
    },
    loginIcon1: {
        width: '40%',
        height: '35%',
        marginTop: '-23%',
        marginLeft: '13%',
    },
});

export default LogIn;