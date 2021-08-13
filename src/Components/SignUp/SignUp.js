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
import Loader from '../../Loader/Loader'
import UserSession from '../../libs/sessions';

const imageBackground = {
    uri: 'https://www.dropbox.com/s/43mkiz2sqxcdwcj/tree-plant.png?raw=1',
};

class SignUp extends React.Component {
    state = {
        loading: false,
        errors: [],
        user: undefined,
        form: {},
    };


    handleSubmit = async () => {
        try {
            this.setState({ loading: true, user: undefined });
            let response = await UserSession.instance.signup(this.state.form);
            if (typeof response == 'object') {
                let errors = [];
                let cont = 0;

                for (let error in response) {
                    let key = error;

                    if (error == 'non_field_errors') {
                        error = 'password';
                    }
                    errors.push(
                        <View key={cont}>
                            <Text style={styles.errorMsg}>
                                {`${error} : ${response[key][0]}`}
                            </Text>
                        </View>
                    );
                    cont++;
                }
                this.setState({
                    loading: false,
                    user: undefined,
                    errors: undefined,
                });
            } else {
                this.setState({
                    loading: false,
                    user: undefined,
                    errors: undefined,
                });
                if(this.state.user) {
                    this.props.navigation.navigate('Login')
                }
            }
        } catch (err) {
            console.log('sign up error', err);
            throw Error(err);
        }
    }

    render() {
        const { loading, errors } = this.state;
        if (loading == true) {
            <Loader/>
        }
        return (
            <ScrollView style={styles.container}>
                <View style={styles.layerColor}>
                    <ImageBackground source={imageBackground} style={styles.image}>
                        <View style={styles.signBackground}>
                            <View style={styles.form}>
                                <Text style={styles.inputText}>Sign Up</Text>
                                {errors ? (
                                    <View style={styles.errorContainer}>{errors}</View>
                                ) : null}
                                <TextInput style={styles.input} 
                                placeholder={'Username'}
                                keyboardAppearance="dark"
                                onChangeText={text => {
                                    this.setState(prevState => {
                                        let form = Object.assign({}, prevState.form);
                                        form.username = text;
                                        return { form };
                                    });
                                }}></TextInput>
                                <TextInput style={styles.input} 
                                 placeholder={'Email'}
                                 keyboardType="email-address"
                                 keyboardAppearance="dark"
                                 onChangeText={text => {
                                     this.setState(prevState => {
                                         let form = Object.assign({}, prevState.form);
                                         form.email = text;
                                         return { form };
                                     });
                                 }}></TextInput>
                                <TextInput style={styles.input}
                                secureTextEntry={true}
                                 placeholder={'Password'}
                                 keyboardAppearance="dark"
                                 onChangeText={text => {
                                     this.setState(prevState => {
                                         let form = Object.assign({}, prevState.form);
                                         form.password = text;
                                         return { form };
                                     });
                                 }}></TextInput>
                                <TextInput style={styles.input}
                                secureTextEntry={true}
                                 placeholder={'Password Confirmation'}
                                 keyboardAppearance="dark"
                                 onChangeText={text => {
                                     this.setState(prevState => {
                                         let form = Object.assign({}, prevState.form);
                                         form.password_confirmation = text;
                                         return { form };
                                     });
                                 }}></TextInput>
                                <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                                    <Text style={styles.buttonText}>Register</Text>
                                </TouchableOpacity>
                                <Text style={styles.inputTextBot}>Already have an account?</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    signBackground: {
        opacity: 0.8,
        backgroundColor: Colors.whiteLight,
        width: '80%',
        height: '100%',
        marginTop: '8%',
        borderRadius: 20,
        borderColor: Colors.whiteLight,
        borderWidth: 4,
        marginVertical: 120,
    },
    layerColor: {
        flex: 2,
        backgroundColor: Colors.greenLight,
    },
    errorContainer: {
        width: '70%',
        paddingHorizontal: 15,
        paddingVertical: 10,
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
    input: {
        marginTop: '5%',
        height: '12%',
        fontSize: 20,
        color: Colors.black,
        paddingVertical: 5,
        paddingHorizontal: 30,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: '#42494f',
    },
    inputText: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 5,
    },
    inputTextBot: {
        fontSize: 20,
        marginTop: '2%',
        textAlign: 'center',
        marginBottom: 5,
        marginVertical: 100,
    },
    button: {
        width: '100%',
        height: '12%',
        padding: 15,
        marginTop: '13%',
        borderRadius: 30,
        backgroundColor: Colors.blueDark,
        borderWidth: 1,
    },
    buttonText: {
        marginTop: '-4%',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.white,
    },
});

export default SignUp;