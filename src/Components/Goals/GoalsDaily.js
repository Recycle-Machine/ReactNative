import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    ImageBackground,
    StatusBar,
 } from 'react-native'
import * as Progress from 'react-native-progress';
import Colors from '../../res/Colors'

    const goalsDailyBottleImage = {
        uri: 'https://www.dropbox.com/s/td9t6fs54ttdsbd/icons8-botella-de-agua-50.png?raw=1',
    };
    const goalsDailyCanImage = {
        uri: 'https://www.dropbox.com/s/ewr3ngkalfox4lx/icons8-bote-de-cerveza-50.png?raw=1',
    };

    class GoalsDaily extends React.Component{
        handlePress = () => {
            this.props.navigation.navigate('goalsDaily Today');
        };

        render(){
            return(
                <View style={styles.goalsDailyContainer}>
                    <StatusBar backgroundColor="transparent" translucent={true} />
                        <View style={styles.goalsDailyLayerColor}>
                            <Text style={styles.goalsDailyTitle}>Daily</Text>
                            <View style={styles.goalsDailyTextContainer}>
                            <Text style={styles.goalsDailyText}>50 kg each</Text>
                            </View>
                            <Text style={styles.goalsDailyButtonText}>22 kgs of plastic</Text>
                            <ImageBackground style={styles.goalsDailyIcon1} source={goalsDailyBottleImage}></ImageBackground>
                            <Progress.Pie progress={0.45} size={125} marginTop={'-25%'} color={Colors.blueDark} />
                            <Text style={styles.goalsDailyButtonText1}>24 kgs of aluminum</Text>
                            <ImageBackground style={styles.goalsDailyIcon2} source={goalsDailyCanImage}></ImageBackground>
                            <Progress.Pie progress={0.49} size={125} marginTop={'-25%'} color={Colors.blueDark} />
                        </View>
                </View>
            );
        }
    }

    const styles = StyleSheet.create({
        goalsDailyContainer: {
            flex: 1,
            marginTop: '-10%',
        },
        goalsDailyLayerColor: {
            backgroundColor: Colors.greenLight,
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
        },
        goalsDailyTitle: {
            marginTop: '10%',
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
        },
        goalsDailyText: {
            color: Colors.black,
            marginLeft: '10%',
            marginTop: '2%',
            fontSize: 20,
            fontWeight: 'bold',
        },
        goalsDailyTextContainer: {
            marginTop: '10%',
            marginLeft: '-10%',
        },
        goalsDailyButtonText: {
            marginLeft: '5%',
            marginTop: '15%',
            fontSize: 22,
            fontWeight: 'bold',
            color: Colors.black,
        },
        goalsDailyButtonText1: {
            marginLeft: '15%',
            marginTop: '15%',
            fontSize: 22,
            fontWeight: 'bold',
            color: Colors.black,
        },
        goalsDailyIcon1: {
            width: '25%',
            height: '25%',
            marginTop: '-10%',
            marginLeft: '-35%'
        },
        goalsDailyIcon2: {
            width: '25%',
            height: '25%',
            marginTop: '-10%',
            marginLeft: '-35%'
        },
    });

    export default GoalsDaily;