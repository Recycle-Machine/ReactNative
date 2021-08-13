import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    Image,
} from 'react-native'
import Colors from '../../res/Colors'
import Loader from '../../Loader/Loader'
import UserSession from '../../libs/sessions';

const imageBackground = {
    uri: 'https://www.dropbox.com/s/43mkiz2sqxcdwcj/tree-plant.png?raw=1',
};
const emailImage = {
    uri: 'https://www.dropbox.com/s/oixlggx2qi8n5hk/e-mail.png?raw=1',
};
const lockImage = {
    uri: 'https://www.dropbox.com/s/tm43b4u8hpdlnvz/icons8-visible-24_1.png?raw=1',
};

class LogIn extends React.Component {
    state = {
        loading: false,
        error: null,
        user: undefined,
        form: {},
    };

    componentDidMount = () => {
        this.deleteTokens();
    };

    deleteTokens = async () => {
        await UserSession.instance.logout();
    };

    handleSubmit = async () => {
        try {
            this.setState({ loading: true, error: null, user: undefined });
            let response = await UserSession.instance.login(this.state.form);
            if (typeof response == 'object') {
                console.log(response);
                if (response['405']) {
                    var message = 'Account is not verified';
                } else {
                    var message = 'Invalid Username or Password. please try again.';
                }
                this.setState({ loading: false, error: message, user: undefined });
            } else {
                this.setState({ loading: false, error: null, user: response });
            }
        } catch (err) {
            this.setState({ loading: false, error: err });
        }
        if (this.state.user) {
            this.props.navigation.replace('Land');
        }
    };

    render() {
        const { loading, error } = this.state;
        return (
            <ScrollView style={styles.loginContainer}>
                <View style={styles.layerColor}>
                    <ImageBackground source={imageBackground} style={styles.image}>
                        <View style={styles.loginBackground}>
                            <View style={styles.form}>
                                <Text style={styles.loginInputText}>User Login</Text>
                                {error ? (
                                    <View styles={styles.errorContainer}>
                                        <Text styles={styles.errorMsg}>
                                            {error}
                                        </Text>
                                    </View>
                                ) : null}
                                <TextInput style={styles.loginInput} 
                                placeholder={'Username'}
                                placeholderColor={Colors.black}
                                onChangeText={text => {
                                    this.setState(prevState => {
                                        let form = Object.assign({}, prevState.form);
                                        form.username = text;
                                        return { form };
                                    });
                                }}></TextInput>
                                <TextInput style={styles.loginInput1}
                                secureTextEntry={true}
                                placeholder={'Password'}
                                onChangeText={text => {
                                    this.setState(prevState => {
                                        let form = Object.assign({}, prevState.form);
                                        form.password = text;
                                        return { form };
                                    });
                                }}></TextInput>
                                <TouchableOpacity style={styles.loginButton} onPress={this.handleSubmit}>
                                    <Text style={styles.loginButtonText}>Login</Text>
                                </TouchableOpacity>
                                <Text style={styles.loginInputTextBot}>Forgot password?</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
    },
    loginBackground: {
        opacity: 0.85,
        backgroundColor: Colors.whiteLight,
        width: '80%',
        height: '50%',
        marginTop: '20%',
        borderRadius: 20,
        borderColor: Colors.whiteLight,
        borderWidth: 4,
        marginVertical: 420,
    },
    layerColor: {
        flex: 2,
        backgroundColor: Colors.greenLight,
    },
    errorContainer: {
        width: '70%',
        backgroundColor: Colors.blueDark,
        borderRadius: 5,
    },
    errorMsg: {
        color: Colors.white,
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
        marginTop: '35%',
        marginLeft: '12%',
        height: '18%',
        fontSize: 20,
        color: Colors.black,
        paddingVertical: 5,
        paddingHorizontal: 30,
        paddingLeft: 90,
        paddingRight: 70,
        borderWidth: 2,
        borderRadius: 30,
        position: 'absolute',
        borderColor: Colors.black,
    },
    loginInput1: {
        marginTop: '65%',
        marginLeft: '12%',
        height: '18%',
        fontSize: 20,
        color: Colors.black,
        paddingVertical: 5,
        paddingHorizontal: 30,
        paddingLeft: 90,
        paddingRight: 70,
        borderWidth: 2,
        borderRadius: 30,
        position: 'absolute',
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
        marginTop: '120%',
        marginLeft: '28%',
        color: Colors.charade,
        marginBottom: 5,
        position: 'absolute',
        marginVertical: 100,
    },
    loginButton: {
        width: '90%',
        height: '20%',
        padding: 15,
        marginTop: '75%',
        marginLeft: '5%',
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
        width: '20%',
        height: '25%',
        marginTop: '25%',
        marginLeft: '15%',
        position: 'absolute',
    },
    loginIcon1: {
        width: 50,
        height: -300,
        marginTop: '50%',
        marginLeft: '5%',
        position: 'absolute',
    },
});

export default LogIn;