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

class SignUp extends React.Component {
    handlePress = () => {
        this.props.navigation.navigate('Login');
    };

    render() {
        return(
            <ScrollView style={styles.container}>
                <View style={styles.layerColor}>
                    <ImageBackground source={imageBackground} style={styles.image}>
                        <View style={styles.signBackground}>
                            <View style={styles.form}>
                                <Text style={styles.inputText}>Sign Up</Text>
                                <TextInput style={styles.input} placeholder={'User Name'}></TextInput>
                                <TextInput style={styles.input} placeholder={'Name'}></TextInput>
                                <TextInput style={styles.input} placeholder={'Last Name'}></TextInput>
                                <TextInput style={styles.input} placeholder={'Password'}></TextInput>
                                <TextInput style={styles.input} placeholder={'Enrollment'}></TextInput>
                                <TextInput style={styles.input} placeholder={'Email'}></TextInput>
                                <TextInput style={styles.input} placeholder={'City'}></TextInput>
                                <TextInput style={styles.input} placeholder={'State'}></TextInput>
                                <TextInput style={styles.input} placeholder={'School'}></TextInput>
                                <TextInput style={styles.input} placeholder={'Grade'}></TextInput>
                                <TextInput style={styles.input} placeholder={'Career'}></TextInput>
                                <TouchableOpacity style={styles.button} onPress={this.handlePress}>
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
    container:{
        flex: 1,
    },
    signBackground: {
        opacity: 0.8,
        backgroundColor: Colors.whiteLight,
        width: '80%',
        height: '105%',
        marginTop: '8%',
        borderRadius: 20,
        borderColor: Colors.whiteLight,
        borderWidth: 4,
        marginVertical: 150,
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
    input: {
        marginTop: '5%',
        height: '6.2%',
        fontSize: 25,
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
        height: '5.8%',
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