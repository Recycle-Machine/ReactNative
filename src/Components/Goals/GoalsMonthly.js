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

    const goalsMonthlyBottleImage = {
        uri: 'https://www.dropbox.com/s/td9t6fs54ttdsbd/icons8-botella-de-agua-50.png?raw=1',
    };
    const goalsMonthlyCanImage = {
        uri: 'https://www.dropbox.com/s/ewr3ngkalfox4lx/icons8-bote-de-cerveza-50.png?raw=1',
    };

    class GoalsMonthly extends React.Component{
        handlePress = () => {
            this.props.navigation.navigate('');
        };

        render(){
            return(
                <View style={styles.goalsMonthlyContainer}>
                    <StatusBar backgroundColor="transparent" translucent={true} />
                        <View style={styles.goalsMonthlyLayerColor}>
                            <Text style={styles.goalsMonthlyTitle}>Monthly</Text>
                            <View style={styles.goalsMonthlyTextContainer}>
                            <Text style={styles.goalsMonthlyText}>50 kg each</Text>
                            </View>
                            <Text style={styles.goalsMonthlyButtonText}>22 kgs of plastic</Text>
                            <ImageBackground style={styles.goalsMonthlyIcon1} source={goalsMonthlyBottleImage}></ImageBackground>
                            <Progress.Pie progress={0.45} size={125} marginTop={'-25%'} color={Colors.blueDark} />
                            <Text style={styles.goalsMonthlyButtonText1}>24 kgs of aluminum</Text>
                            <ImageBackground style={styles.goalsMonthlyIcon2} source={goalsMonthlyCanImage}></ImageBackground>
                            <Progress.Pie progress={0.49} size={125} marginTop={'-25%'} color={Colors.blueDark} />
                        </View>
                </View>
            );
        }
    }

    const styles = StyleSheet.create({
        goalsMonthlyContainer: {
            flex: 1,
            marginTop: '-10%',
        },
        goalsMonthlyLayerColor: {
            backgroundColor: Colors.greenLight,
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
        },
        goalsMonthlyTitle: {
            marginTop: '10%',
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
        },
        goalsMonthlyText: {
            color: Colors.black,
            marginLeft: '10%',
            marginTop: '2%',
            fontSize: 20,
            fontWeight: 'bold',
        },
        goalsMonthlyTextContainer: {
            marginTop: '10%',
            marginLeft: '-10%',
        },
        goalsMonthlyButtonText: {
            marginLeft: '5%',
            marginTop: '15%',
            fontSize: 22,
            fontWeight: 'bold',
            color: Colors.black,
        },
        goalsMonthlyButtonText1: {
            marginLeft: '15%',
            marginTop: '15%',
            fontSize: 22,
            fontWeight: 'bold',
            color: Colors.black,
        },
        goalsMonthlyIcon1: {
            width: '25%',
            height: '25%',
            marginTop: '-10%',
            marginLeft: '-35%'
        },
        goalsMonthlyIcon2: {
            width: '25%',
            height: '25%',
            marginTop: '-10%',
            marginLeft: '-35%'
        },
    });

    export default GoalsMonthly;