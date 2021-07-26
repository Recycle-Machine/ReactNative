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
    uri: 'https://i.pinimg.com/originals/5c/eb/ef/5cebefbae1a761eb47a6c1a94ca2fcf3.png',
};

class LogIn extends React.Component {
    handlePress = () => {
        this.props.navigation.navigate('Scoreboards');
    };

    render() {
        return (
            <ScrollView style={styles.loginContainer}>
                <ImageBackground source={imageBackground} style={styles.image}>
                    <View style={styles.loginLayerColor}>
                        <View style={styles.loginBackground}>
                            <View style={styles.loginForm}>
                                <Text style={styles.loginInputText}>User Login</Text>
                                <TextInput style={styles.loginInput} placeholder={'Email'}></TextInput>
                                <View style={styles.loginIcon1}></View>
                                <TextInput style={styles.loginInput} placeholder={'Password'}></TextInput>
                                <View style={styles.loginIcon1}></View>
                                <TouchableOpacity style={styles.loginButton} onPress={this.handlePress}>
                                    <Text style={styles.loginButtonText}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    loginBackground: {
        // backgroundColor: '#cccccc',
        backgroundColor: Colors.white,
        opacity: 5,
        width: '80%',
        height: '80%',
        marginTop: '50%',
        marginVertical: 100,
        borderRadius: 20,
        borderColor: Colors.blackPearl,
        borderWidth: 4,
    },
    loginLayerColor: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginForm: {
        paddingHorizontal: 20,
    },
    loginInput: {
        marginTop: '10%',
        height: '18%',
        fontSize: 30,
        color: '#42494f',
        paddingVertical: 5,
        paddingHorizontal: 30,
        paddingLeft: 100,
        borderWidth: 2,
        borderRadius: 40,
        borderColor: '#42494f',
    },
    loginInputText: {
        fontSize: 40,
        marginTop: '8%',
        textAlign: 'center',
        color: Colors.charade,
        marginBottom: 5,
    },
    loginButton: {
        width: '100%',
        height: '16%',
        padding: 15,
        marginTop: '19%',
        borderRadius: 30,
        backgroundColor: '#121212cc',
        borderWidth: 1,
    },
    loginButtonText: {
        marginTop: '-5%',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.white,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    loginIcon1: {
        backgroundColor: Colors.Azabache,
        width: '25%',
        height: '14%',
        marginTop: '-23%',
        marginLeft: '10%',
    },
});

export default LogIn;