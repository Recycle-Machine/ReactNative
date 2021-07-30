import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    ImageBackground,
    StatusBar,
    TouchableOpacity,
 } from 'react-native'
import * as Progress from 'react-native-progress';
import Colors from '../../res/Colors'

    const goalsImage = {
        uri: 'https://www.dropbox.com/s/43mkiz2sqxcdwcj/tree-plant.png?raw=1',
    };
    const goalsBottleImage = {
        uri: 'https://www.dropbox.com/s/td9t6fs54ttdsbd/icons8-botella-de-agua-50.png?raw=1',
    };
    const goalsCanImage = {
        uri: 'https://www.dropbox.com/s/ewr3ngkalfox4lx/icons8-bote-de-cerveza-50.png?raw=1',
    };

    class Goals extends React.Component{
        handlePress = () => {
            this.props.navigation.navigate('NavbarGoals');
        };

        render(){
            return(
                <View style={styles.goalsContainer}>
                    <StatusBar backgroundColor="transparent" translucent={true} />
                        <View style={styles.goalsLayerColor}>
                            <Text style={styles.goalsTitle}>Goals</Text>
                            <View style={styles.goalsTextContainer}>
                            <Text style={styles.goalsText}>Luis Sigala</Text>
                            </View>
                            <Text style={styles.goalsButtonText}>22 kgs of plastic</Text>
                            <ImageBackground style={styles.goalsIcon1} source={goalsBottleImage}></ImageBackground>
                            <Progress.Pie progress={0.5} size={125} marginTop={'-25%'} color={Colors.blueDark} />
                            <Text style={styles.goalsButtonText1}>24 kgs of aluminum</Text>
                            <ImageBackground style={styles.goalsIcon2} source={goalsCanImage}></ImageBackground>
                            <Progress.Pie progress={0.5} size={125} marginTop={'-30%'} color={Colors.blueDark} />
                            <ImageBackground source={goalsImage} style={styles.goalsImage}></ImageBackground>
                            <TouchableOpacity style={styles.goalsButtonNavbar} onPress={this.handlePress}>
                            <Text style={styles.goalsButtonNavbarText}>See More</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            );
        }
    }

    const styles = StyleSheet.create({
        goalsContainer: {
            flex: 1,
        },
        goalsLayerColor: {
            backgroundColor: Colors.greenLight,
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
        },
        goalsImage: {
            height: '25%',
            width: '60%',
            marginTop: '-135%',
            marginLeft: '-10%',
            flex: 1,
            resizeMode: 'cover',
        },
        goalsTitle: {
            marginTop: '10%',
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
        },
        goalsText: {
            color: Colors.black,
            marginLeft: '40%',
            marginTop: '2%',
            fontSize: 20,
            fontWeight: 'bold',
        },
        goalsTextContainer: {
            marginTop: '10%',
            marginLeft: '-10%',
        },
        goalsButtonText: {
            marginLeft: '-5%',
            marginTop: '15%',
            fontSize: 22,
            fontWeight: 'bold',
            color: Colors.black,
        },
        goalsButtonText1: {
            marginLeft: '5%',
            marginTop: '5%',
            fontSize: 22,
            fontWeight: 'bold',
            color: Colors.black,
        },
        goalsIcon1: {
            width: '25%',
            height: '25%',
            marginTop: '-10%',
            marginLeft: '-45%'
        },
        goalsIcon2: {
            width: '25%',
            height: '25%',
            marginTop: '-10%',
            marginLeft: '-45%'
        },
        goalsButtonNavbar: {
            backgroundColor: Colors.blueDark,
            width: '40%',
            height: '10%',
            marginBottom: '1%',
            borderRadius: 30,
        },
        goalsButtonNavbarText: {
            textAlign: 'center',
            color: Colors.white,
            marginTop: '8%',
            fontSize: 30,
        },
    });

    export default Goals;