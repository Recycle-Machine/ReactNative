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

    const EditProfileImage = {
        uri: 'https://www.dropbox.com/s/43mkiz2sqxcdwcj/tree-plant.png?raw=1',
    };

    class EditProfile extends React.Component{
        handlePress = () => {
            this.props.navigation.replace('Profile');
        };

        render(){
            return(
                <ScrollView style={styles.editProfileContainer}>
                    <StatusBar backgroundColor="transparent" translucent={true} />
                            <View style={styles.editProfileLayerColor}>
                                <View style={styles.line}></View>
                                <Text style={styles.editProfileHeading1}>Luis Sigala</Text>
                                <Text style={styles.editProfileHeading2}>UTCH BIS</Text>
                                <View style={styles.editProfileTexts}>
                                <Text style={styles.editProfileHeading}>UserName</Text>
                                <Text style={styles.editProfileText}>Luis</Text>
                                <Text style={styles.editProfileHeading}>Name</Text>
                                <Text style={styles.editProfileText}>Luis</Text>
                                <Text style={styles.editProfileHeading}>Last Name</Text>
                                <Text style={styles.editProfileText}>Sigala</Text>
                                <Text style={styles.editProfileHeading}>Surname</Text>
                                <Text style={styles.editProfileText}>Fernandez</Text>
                                <Text style={styles.editProfileHeading}>Age</Text>
                                <Text style={styles.editProfileText}>20</Text>
                                <Text style={styles.editProfileHeading}>Email</Text>
                                <Text style={styles.editProfileText}>luiscard34@hotmail.com                           </Text>
                                <Text style={styles.editProfileHeading}>Country</Text>
                                <Text style={styles.editProfileText}>México</Text>
                                <Text style={styles.editProfileHeading}>State</Text>
                                <Text style={styles.editProfileText}>Chihuahua</Text>
                                <Text style={styles.editProfileHeading}>City</Text>
                                <Text style={styles.editProfileText}>Chihuahua</Text>
                                <Text style={styles.editProfileHeading}>School</Text>
                                <Text style={styles.editProfileText}>UTCH BIS</Text>
                                <Text style={styles.editProfileHeading}>Career</Text>
                                <Text style={styles.editProfileText}>TID</Text>
                                <Text style={styles.editProfileHeading}>Grade</Text>
                                <Text style={styles.editProfileText}>0</Text>
                                <ImageBackground source={EditProfileImage} style={styles.editProfileImage}></ImageBackground>
                                </View>
                                <TouchableOpacity style={styles.editProfileButton} onPress={this.handlePress}>
                                    <Text style={styles.editProfileButtonText}>Save Changes</Text>
                                </TouchableOpacity>
                                <View style={styles.editProfileAll}></View>
                        </View>
                </ScrollView>
            );
        }
    }

    const styles = StyleSheet.create({
        editProfileContainer: {
            flex: 1,
            marginTop: '-45%',
        },
        editProfileAll: {
            marginVertical: 300,
        },
        line: {
            backgroundColor: Colors.whiteDark,
            height: '0.5%',
            width: '90%',
            marginTop: '210%',
        },
        editProfileLayerColor: {
            backgroundColor: Colors.greenLight,
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
        },
        editProfileImage: {
            height: '7%',
            width: '45%',
            marginTop: '-175%',
            marginLeft: '-1%',
            flex: 1,
            resizeMode: 'cover',
            backgroundColor: Colors.blueDark,
        },
        editProfileButton: {
            width: '65%',
            padding: 15,
            marginTop: '-95%',
            borderRadius: 30,
            backgroundColor: Colors.blueDark,
            borderWidth: 1,
        },
        editProfileButtonText: {
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            color: Colors.white,
        },
        editProfileText: {
            marginTop: '1%',
            fontSize: 17,
            backgroundColor: Colors.whiteDark,
            borderRadius: 10,
        },
        editProfileHeading: {
            marginTop: '1%',
            fontSize: 16,
            fontWeight: 'bold',
        },
        editProfileHeading1: {
            marginTop: '-25%',
            marginLeft: '1%',
            fontSize: 25,
        },
        editProfileHeading2: {
            marginTop: '1%',
            marginLeft: '-7%',
            fontSize: 20,
        },
        editProfileTexts: {
            marginTop: '15%',
            marginLeft: '-10%',
        },
    });

    export default EditProfile;