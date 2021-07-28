import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    ImageBackground, 
    TouchableOpacity, 
    StatusBar,
    ScrollView,
 } from 'react-native'
import Colors from '../../res/Colors'

    const ProfileImage = {
        uri: 'https://www.dropbox.com/s/43mkiz2sqxcdwcj/tree-plant.png?raw=1',
    };

    class Profile extends React.Component{
        handlePress = () => {
            this.props.navigation.navigate('Edit Profile');
        };

        render(){
            return(
                <ScrollView style={styles.profileContainer}>
                    <StatusBar backgroundColor="transparent" translucent={true} />
                            <View style={styles.profileLayerColor}>
                                <View style={styles.line}></View>
                                <Text style={styles.profileHeading1}>Luis Sigala</Text>
                                <Text style={styles.profileHeading2}>UTCH BIS</Text>
                                <View style={styles.profileTexts}>
                                <Text style={styles.profileHeading}>UserName</Text>
                                <Text style={styles.profileText}>Luis</Text>
                                <Text style={styles.profileHeading}>Name</Text>
                                <Text style={styles.profileText}>Luis</Text>
                                <Text style={styles.profileHeading}>Last Name</Text>
                                <Text style={styles.profileText}>Sigala</Text>
                                <Text style={styles.profileHeading}>Surname</Text>
                                <Text style={styles.profileText}>Fernandez</Text>
                                <Text style={styles.profileHeading}>Age</Text>
                                <Text style={styles.profileText}>20</Text>
                                <Text style={styles.profileHeading}>Email</Text>
                                <Text style={styles.profileText}>luiscard34@hotmail.com</Text>
                                <Text style={styles.profileHeading}>Country</Text>
                                <Text style={styles.profileText}>México</Text>
                                <Text style={styles.profileHeading}>State</Text>
                                <Text style={styles.profileText}>Chihuahua</Text>
                                <Text style={styles.profileHeading}>City</Text>
                                <Text style={styles.profileText}>Chihuahua</Text>
                                <Text style={styles.profileHeading}>School</Text>
                                <Text style={styles.profileText}>UTCH BIS</Text>
                                <Text style={styles.profileHeading}>Career</Text>
                                <Text style={styles.profileText}>TID</Text>
                                <Text style={styles.profileHeading}>Grade</Text>
                                <Text style={styles.profileText}>0</Text>
                                <ImageBackground source={ProfileImage} style={styles.profileImage}></ImageBackground>
                                </View>
                                <TouchableOpacity style={styles.profileButton} onPress={this.handlePress}>
                                    <Text style={styles.profileButtonText}>Edit Profile Information</Text>
                                </TouchableOpacity>
                                <View style={styles.profileAll}></View>
                        </View>
                </ScrollView>
            );
        }
    }

    const styles = StyleSheet.create({
        profileContainer: {
            flex: 1,
            marginTop: '-45%',
        },
        profileAll: {
            marginVertical: 300,
        },
        line: {
            backgroundColor: Colors.whiteDark,
            height: '0.5%',
            width: '90%',
            marginTop: '210%',
        },
        profileLayerColor: {
            backgroundColor: Colors.greenLight,
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
        },
        profileImage: {
            height: '7%',
            width: '45%',
            marginTop: '-143%',
            marginLeft: '-1%',
            flex: 1,
            resizeMode: 'cover',
            backgroundColor: Colors.blueDark,
        },
        profileButton: {
            width: '65%',
            padding: 15,
            marginTop: '-95%',
            borderRadius: 30,
            backgroundColor: Colors.blueDark,
            borderWidth: 1,
        },
        profileButtonText: {
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: Colors.white,
        },
        profileText: {
            marginTop: '1%',
            fontSize: 17,
        },
        profileHeading: {
            marginTop: '1%',
            fontSize: 16,
            fontWeight: 'bold',
        },
        profileHeading1: {
            marginTop: '-25%',
            marginLeft: '1%',
            fontSize: 25,
        },
        profileHeading2: {
            marginTop: '1%',
            marginLeft: '-7%',
            fontSize: 20,
        },
        profileTexts: {
            marginTop: '15%',
            marginLeft: '-40%',
        },
    });

    export default Profile;