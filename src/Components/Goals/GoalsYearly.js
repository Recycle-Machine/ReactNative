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

    const goalsYearlyBottleImage = {
        uri: 'https://www.dropbox.com/s/td9t6fs54ttdsbd/icons8-botella-de-agua-50.png?raw=1',
    };
    const goalsYearlyCanImage = {
        uri: 'https://www.dropbox.com/s/ewr3ngkalfox4lx/icons8-bote-de-cerveza-50.png?raw=1',
    };

    class GoalsYearly extends React.Component{
        handlePress = () => {
            this.props.navigation.navigate('');
        };

        render(){
            return(
                <View style={styles.goalsYearlyContainer}>
                    <StatusBar backgroundColor="transparent" translucent={true} />
                        <View style={styles.goalsYearlyLayerColor}>
                            <Text style={styles.goalsYearlyTitle}>Yearly</Text>
                            <View style={styles.goalsYearlyTextContainer}>
                            <Text style={styles.goalsYearlyText}>50 kg each</Text>
                            </View>
                            <Text style={styles.goalsYearlyButtonText}>22 kgs of plastic</Text>
                            <ImageBackground style={styles.goalsYearlyIcon1} source={goalsYearlyBottleImage}></ImageBackground>
                            <Progress.Pie progress={0.45} size={125} marginTop={'-25%'} color={Colors.blueDark} />
                            <Text style={styles.goalsYearlyButtonText1}>24 kgs of aluminum</Text>
                            <ImageBackground style={styles.goalsYearlyIcon2} source={goalsYearlyCanImage}></ImageBackground>
                            <Progress.Pie progress={0.49} size={125} marginTop={'-25%'} color={Colors.blueDark} />
                        </View>
                </View>
            );
        }
    }

    const styles = StyleSheet.create({
        goalsYearlyContainer: {
            flex: 1,
            marginTop: '-10%',
        },
        goalsYearlyLayerColor: {
            backgroundColor: Colors.greenLight,
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
        },
        goalsYearlyTitle: {
            marginTop: '10%',
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
        },
        goalsYearlyText: {
            color: Colors.black,
            marginLeft: '10%',
            marginTop: '2%',
            fontSize: 20,
            fontWeight: 'bold',
        },
        goalsYearlyTextContainer: {
            marginTop: '10%',
            marginLeft: '-10%',
        },
        goalsYearlyButtonText: {
            marginLeft: '5%',
            marginTop: '15%',
            fontSize: 22,
            fontWeight: 'bold',
            color: Colors.black,
        },
        goalsYearlyButtonText1: {
            marginLeft: '15%',
            marginTop: '15%',
            fontSize: 22,
            fontWeight: 'bold',
            color: Colors.black,
        },
        goalsYearlyIcon1: {
            width: '25%',
            height: '25%',
            marginTop: '-10%',
            marginLeft: '-35%'
        },
        goalsYearlyIcon2: {
            width: '25%',
            height: '25%',
            marginTop: '-10%',
            marginLeft: '-35%'
        },
    });

    export default GoalsYearly;