import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from 'react-native'
import Colors from '../../res/Colors'

    const machineImage = {
        uri: 'https://www.dropbox.com/s/2bekvz47r9zzobi/machine.png?raw=1',
    };
    const machineBottleImage = {
        uri: 'https://www.dropbox.com/s/td9t6fs54ttdsbd/icons8-botella-de-agua-50.png?raw=1',
    };
    const machineCanImage = {
        uri: 'https://www.dropbox.com/s/ewr3ngkalfox4lx/icons8-bote-de-cerveza-50.png?raw=1',
    };

class MapMachine extends React.Component {
    handlePress = () => {
        this.props.navigation.navigate('Map');
    };

    render() {
        return(
            <View style={styles.machineContainer}>
                <View style={styles.layerColor}>
                        <View style={styles.machineBackground}>
                            <View style={styles.form}>
                                <Text style={styles.machineInputText}>UTCH BIS</Text>
                                <Text style={styles.machineInputText1}>Monday - Friday</Text>
                                <Text style={styles.machineInputText1}>07:00 - 16:00</Text>
                                <Text style={styles.machineInputText2}>Closed right now</Text>
                                <View style={styles.machineImageBack}>
                                <ImageBackground source={machineImage} style={styles.machineImage}></ImageBackground>
                                </View>
                                <TouchableOpacity style={styles.machineButton} onPress={this.handlePress}>
                                <Text style={styles.machineButtonText}>Takes</Text>
                                </TouchableOpacity>
                                <View style={styles.machineIconBack}>
                                <ImageBackground style={styles.machineIcon} source={machineBottleImage}></ImageBackground>
                                </View>
                                <View style={styles.machineIconBack1}>
                                <ImageBackground style={styles.machineIcon1} source={machineCanImage}></ImageBackground>
                                </View>
                                <Text style={styles.machineInputTextBot}>Address</Text>
                                <Text style={styles.machineInputTextBot1}>
                                    Km 3.5 Carretera Chihuahua a
                                    Aldama Colinas de León, 31313
                                    Chihuahua, Chih
                                </Text>
                            </View>
                        </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    machineContainer:{
        flex: 1,
    },
    machineBackground: {
        backgroundColor: Colors.whiteLight,
        width: '80%',
        height: '65%',
        marginTop: '70%',
        marginLeft: '10%',
        borderRadius: 20,
        borderColor: Colors.whiteLight,
        borderWidth: 4,
        marginVertical: 400,
    },
    layerColor: {
        flex: 2,
        backgroundColor: Colors.greenLight,
        justifyContent: 'center',
    },
    machineImage: {
        width: '90%',
        height: '90%',
        marginTop: '10%',
        marginLeft: '7%',
    },
    machineImageBack: {
        width: '55%',
        height: '35%',
        marginTop: '-60%',
        marginLeft: '-4%',
        backgroundColor: Colors.greenDark,
        borderRadius: 75,
    },
    form: {
        paddingHorizontal: 20,
    },
    machineInputText: {
        fontSize: 22,
        marginLeft: '55%',
        color: Colors.black,
        fontWeight: 'bold',
        marginTop: '5%',
    },
    machineInputText2: {
        fontSize: 19,
        marginLeft: '55%',
        color: Colors.black,
        fontWeight: 'bold',
        marginTop: '5%',
    },
    machineInputText1: {
        fontSize: 15,
        marginTop: '5%',
        marginLeft: '55%',
        fontWeight: 'bold',
        color: Colors.black,
    },
    machineInputTextBot: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '10%',
        textAlign: 'left',
        color: Colors.black,
        marginBottom: 5,
        marginVertical: 100,
    },
    machineInputTextBot1: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: '1%',
        textAlign: 'left',
        color: Colors.charade,
        marginBottom: 5,
        marginVertical: 100,
    },
    machineButton: {
        width: '100%',
        height: '17%',
        padding: 15,
        marginTop: '20%',
        borderRadius: 30,
        backgroundColor: Colors.blueDark,
        borderWidth: 1,
    },
    machineButtonText: {
        marginTop: '-1%',
        textAlign: 'left',
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.white,
    },
    machineIcon: {
        width: '90%',
        height: '90%',
        marginTop: '8%',
        marginLeft: '8%',
    },
    machineIconBack: {
        width: '20%',
        height: '15%',
        marginTop: '-27%',
        marginLeft: '45%',
        backgroundColor: Colors.greenLight,
        borderRadius: 75,
    },
    machineIcon1: {
        width: '90%',
        height: '90%',
        marginTop: '8%',
        marginLeft: '8%',
    },
    machineIconBack1: {
        width: '20%',
        height: '15%',
        marginTop: '-25%',
        marginLeft: '70%',
        backgroundColor: Colors.greenLight,
        borderRadius: 75,
    },
});

export default MapMachine;