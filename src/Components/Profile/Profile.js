import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, DevSettings } from 'react-native'
import Colors from '../../res/Colors';
import UserSession from '../../libs/sessions';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const logOutImage = {
    uri: 'https://cdn.discordapp.com/attachments/816020878697300028/875479610891046932/icons8-exportar-24.png',
};

const cameraIcon = {
    uri: 'https://cdn.discordapp.com/attachments/816020878697300028/875549219690270721/imagen.png',
};

class Profile extends React.Component {

    state = {
        user: {
            profile: {},
        },
        token: '',
        picture: '',
    }


    handlePress = () => {
        this.props.navigation.navigate('Edit Profile');
    };

    componentDidMount = () => {
        this.getUserData();
    };

    getUserData = async () => {
        let user = await UserSession.instance.getUser();
        let token = await UserSession.instance.getToken(user.username);
        this.setState({ user: user, token: token });
    };

    userLogOut = () => {
        DevSettings.reload()
    }

    handleChooseProfileImage = () => {
        const options = {
            includeBase64: false,
            mediaType: 'photo',
        };
        launchImageLibrary(options, response => {
            let photo = response.assets[0].uri;
            console.log('foto', photo);
            this.setState({ picture: photo });
            this.editProfilePicture();
        });
    };

    editProfilePicture = async () => {
        const { user, token, picture } = this.state;
        let response = await UserSession.instance.editProfile(
            user.id,
            token,
            picture,
        );
        console.log(response);
        this.setState({ user: response });
    };


    render() {
        const { user, picture } = this.state;
        return (
            <ScrollView style={styles.profileContainer}>
                <View
                    style={styles.profileHeader}
                />
                <Image
                    style={styles.profileImage}
                    source={{ uri: picture || `${user.profile.user_image}` }}
                />
                <TouchableOpacity
                    style={styles.profileEdit}
                    onPress={this.handleChooseProfileImage}
                >
                    <Image
                        style={styles.camera}
                        source={cameraIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.logOut}
                    onPress={this.userLogOut}
                >
                    <Image
                        style={styles.logOutIcon}
                        source={logOutImage}
                    />
                </TouchableOpacity>
                <Text style={styles.profileUsername}>{user.username}</Text>
                <Text style={styles.profileCareerText}>{user.profile.school}</Text>
                <Text style={styles.profileHeading}>First Name</Text>
                <Text style={styles.profileName}>{user.first_name}</Text>
                <Text style={styles.profileHeading1}>Last Name</Text>
                <Text style={styles.profileLastName}>{user.last_name}</Text>
                <Text style={styles.profileHeading2}>Enrollment</Text>
                <Text style={styles.profileAge}>{user.profile.enrollment}</Text>
                <Text style={styles.profileHeading3}>State</Text>
                <Text style={styles.profileState}>{user.profile.state}</Text>
                <Text style={styles.profileHeading4}>City</Text>
                <Text style={styles.profileCity}>{user.profile.city}</Text>
                <Text style={styles.profileHeading5}>Zip code</Text>
                <Text style={styles.profileCountry}>{user.profile.zip_code}</Text>
                <Text style={styles.profileHeading6}>Career</Text>
                <Text style={styles.profileCareer}>{user.profile.carrer}</Text>
                <Text style={styles.profileHeading7}>School</Text>
                <Text style={styles.profileSchool}>{user.profile.school}</Text>
                <View style={styles.profileData}>
                    <TouchableOpacity style={styles.button} onPress={this.handlePress}>
                        <Text style={styles.buttonText}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        backgroundColor: Colors.greenLight,
    },
    profileHeader: {
        width: '140%',
        left: '-1%',
        height: '18%',
        borderBottomColor: Colors.greenDark,
        borderWidth: 2,
    },
    profileImage: {
        width: 130,
        height: 130,
        resizeMode: 'cover',
        borderRadius: 100,
        borderWidth: 5,
        backgroundColor: Colors.blueDark,
        position: 'absolute',
        top: '2%',
        left: '12%',
    },
    profileEdit: {
        width: 40,
        height: 40,
        padding: 5,
        borderRadius: 20,
        borderWidth: 5,
        backgroundColor: Colors.greenLight,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 122,
        left: 145,
    },
    camera: {
        flex: 2,
        width: '100%',
        height: '100%',
    },
    logOut: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
        borderRadius: 100,
        borderWidth: 5,
        backgroundColor: Colors.greenLight,
        position: 'absolute',
        top: '12%',
        left: '11%',
    },
    logOutIcon: {
        flex: 2,
        width: '100%',
        height: '100%',
    },
    profileUsername: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.black,
        top: '-13%',
        left: '50%',
    },
    profileCareerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.black,
        top: '-13%',
        left: '50%',
    },
    profileUserInfo: {
        flexDirection: 'row',
        marginTop: '-5%',
        marginLeft: '10%',
        textAlign: 'left',
    },
    profileHeading: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.black,
        top: '-3%',
        left: '10%',
    },
    profileName: {
        fontSize: 28,
        color: Colors.black,
        top: '-3%',
        left: '10%',
    },
    profileHeading1: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.black,
        top: '-3%',
        left: '10%',
    },
    profileLastName: {
        fontSize: 28,
        top: '-3%',
        left: '10%',
        color: Colors.black,
    },
    profileHeading2: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.black,
        top: '-3%',
        left: '10%',
    },
    profileAge: {
        fontSize: 28,
        top: '-3%',
        left: '10%',
        color: Colors.black,
    },
    profileHeading3: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.black,
        top: '-3%',
        left: '10%',
    },
    profileState: {
        top: '-3%',
        left: '10%',
        fontSize: 28,
        color: Colors.black,
    },
    profileHeading4: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.black,
        top: '-3%',
        left: '10%',
    },
    profileCity: {
        top: '-3%',
        left: '10%',
        fontSize: 28,
        color: Colors.black,
    },
    profileHeading5: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.black,
        top: '-3%',
        left: '10%',
    },
    profileCountry: {
        top: '-3%',
        left: '10%',
        fontSize: 28,
        color: Colors.black,
    },
    profileHeading6: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.black,
        top: '-3%',
        left: '10%',
    },
    profileCareer: {
        top: '-3%',
        left: '10%',
        fontSize: 28,
        color: Colors.black,
    },
    profileHeading7: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.black,
        top: '-3%',
        left: '10%',
    },
    profileSchool: {
        top: '-3%',
        left: '10%',
        fontSize: 28,
        color: Colors.black,
    },
    profileData: {
        marginTop: -20,
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 250,
    },
    button: {
        width: '60%',
        height: '55%',
        padding: 15,
        marginTop: '13%',
        borderRadius: 30,
        backgroundColor: Colors.blueDark,
    },
    buttonText: {
        marginTop: '-4%',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.white,
    },
});

export default Profile;