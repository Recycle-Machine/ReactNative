import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Image,
    ActivityIndicator,
} from 'react-native'
import Colors from '../../res/Colors'
import UserSession from '../../libs/sessions';
import ModalDropdown from 'react-native-modal-dropdown';

class EditProfile extends React.Component {
    state = {
        loading: false,
        user: {
            profile: {},
        },
        token: "",
        form: {
            profile: {},
        },
    };

    componentDidMount = () => {
        this.getUserData();
    };

    getUserData = async () => {
        let user = await UserSession.instance.getUser();
        let token = await UserSession.instance.getToken(user.username);
        this.setState({ user: user, token: token });
        console.log(user);
    };

    editProfileInfoTexts = async () => {
        const { user, token, form } = this.state;
        let response = await UserSession.instance.editProfileInfo(
            user.id,
            token,
            form,
        );
        console.log(user.id);
        console.log(form);
        console.log('token', token);
        console.log('yo', response);
        this.setState({ user: response });
    };

    handleSubmit = async () => {
        this.editProfileInfoTexts();
        this.props.navigation.replace('Profile');
    };

    render() {

        const { user, loading } = this.state;

        if (loading == true) {
            return (
                <View style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator
                        styles={styles.loader}
                        color="#043FF0D"
                        size="large"
                    />
                </View>
            );
        }

        return (
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <Image
                        style={styles.header}
                    />
                    <Image
                        style={styles.profileImage}
                        source={{ uri: `${user.profile.user_image}` }}
                    />
                    <View style={styles.form}>
                        <Text style={styles.inputText}>First Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={`${user.first_name}`}
                            onChangeText={text => {
                                this.setState(prevState => {
                                    let form = Object.assign({}, prevState.form);
                                    form.first_name = text;
                                    return { form };
                                });
                            }} />
                        <Text style={styles.inputText}>Last Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={`${user.last_name}`}
                            onChangeText={text => {
                                this.setState(prevState => {
                                    let form = Object.assign({}, prevState.form);
                                    form.last_name = text;
                                    return { form };
                                });
                            }} />
                        <Text style={styles.inputText}>Enrollment</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={`${user.profile.enrollment}`}
                            onChangeText={text => {
                                this.setState(prevState => {
                                    let form = Object.assign({}, prevState.form);
                                    form.profile.enrollment = text;
                                    return { form };
                                });
                            }} />
                        <Text style={styles.inputText}>State</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={`${user.profile.state}`}
                            onChangeText={text => {
                                this.setState(prevState => {
                                    let form = Object.assign({}, prevState.form);
                                    form.profile.state = text;
                                    return { form };
                                });
                            }} />
                        <Text style={styles.inputText}>City</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={`${user.profile.city}`}
                            onChangeText={text => {
                                this.setState(prevState => {
                                    let form = Object.assign({}, prevState.form);
                                    form.profile.city = text;
                                    return { form };
                                });
                            }} />
                        <Text style={styles.inputText}>Zip code</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={`${user.profile.zip_code}`}
                            onChangeText={text => {
                                this.setState(prevState => {
                                    let form = Object.assign({}, prevState.form);
                                    form.profile.zip_code = text;
                                    return { form };
                                });
                            }} />
                        <Text style={styles.inputText}>Career</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={`${user.profile.carrer}`}
                            onChangeText={text => {
                                this.setState(prevState => {
                                    let form = Object.assign({}, prevState.form);
                                    form.profile.carrer = text;
                                    return { form };
                                });
                            }} />
                        <Text style={styles.inputText}>School</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={`${user.profile.school}`}
                            onChangeText={text => {
                                this.setState(prevState => {
                                    let form = Object.assign({}, prevState.form);
                                    form.profile.school = text;
                                    return { form };
                                });
                            }} />
                        <TouchableOpacity style={styles.submit} onPress={this.handleSubmit}>
                            <Text style={styles.submitText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.greenLight,
    },
    horizontal: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        height: 'auto',
        backgroundColor: Colors.greenLight,
    },
    form: {
        paddingHorizontal: 20,
    },
    header: {
        width: '100%',
        height: 170,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 75,
        borderWidth: 3,
        backgroundColor: Colors.blueDark,
        position: 'absolute',
        top: 25,
        left: '30%',
    },
    input: {
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: Colors.whiteDark,
    },
    inputText: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10,
    },
    submit: {
        alignSelf: 'center',
        marginVertical: 30,
        width: '30%',
        borderWidth: 1,
        borderColor: Colors.blueDark,
        borderRadius: 10,
        backgroundColor: Colors.blueDark,
    },
    submitText: {
        fontSize: 16,
        margin: 5,
        color: Colors.white,
        textAlign: 'center',
    },
    modalInput: {
        height: 150,
        width: '69%',
    },
    modalText: {
        fontSize: 40,
    },
    textModal: {
        fontSize: 20,
        marginTop: '3%',
        textAlign: 'center',
    },
    modalBack: {
        height: 40,
        borderRadius: 10,
        backgroundColor: Colors.whiteDark,
        borderColor: Colors.black,
        borderWidth: 2,
    },
    textInside: {
        fontSize: 18,
        top: '1.5%',
    },
});

export default EditProfile;
