import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from 'react-native'
import Colors from '../../res/Colors'

    const bottleImage1Today = {
        uri: 'https://www.dropbox.com/s/td9t6fs54ttdsbd/icons8-botella-de-agua-50.png?raw=1',
    };
    const canImage1Today = {
        uri: 'https://www.dropbox.com/s/ewr3ngkalfox4lx/icons8-bote-de-cerveza-50.png?raw=1',
    };

class MaterialsMonth extends React.Component {
    handlePress = () => {
        this.props.navigation.navigate('Materials Year');
    };

    render() {
        return (
            <View style={styles.materialsMonthContainer}>
                <View style={styles.materialsMonthLayerColor}>
                    <Text style={styles.materialsMonthInputText}>This Month</Text>
                    <TouchableOpacity style={styles.materialsMonthButton1} onPress={this.handlePress}>
                        <Text style={styles.materialsMonthButtonText1}>11 kgs contributted in this month</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.materialsMonthButton} onPress={this.handlePress}>
                        <Text style={styles.materialsMonthButtonText}>4 kgs of aluminum</Text>
                        <View style={styles.bottleImageMonthBack}>
                        <ImageBackground style={styles.monthIcon1} source={bottleImage1Today}></ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.materialsMonthText}>
                        Km 3.5 Carretera Chihuahua a
                        Aldama Colinas de León, 31313
                        Chihuahua, Chih
                    </Text>
                    <Text style={styles.materialsMonthText1}>
                        20/06/2021
                        04:46 PM
                    </Text>
                    <TouchableOpacity style={styles.materialsMonthButton} onPress={this.handlePress}>
                        <Text style={styles.materialsMonthButtonText}>5 kgs of plastic</Text>
                        <View style={styles.canImageMonthBack}>
                        <ImageBackground style={styles.monthIcon2} source={canImage1Today}></ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.materialsMonthText}>
                        Km 3.5 Carretera Chihuahua a
                        Aldama Colinas de León, 31313
                        Chihuahua, Chih
                    </Text>
                    <Text style={styles.materialsMonthText1}>
                        20/06/2021
                        04:46 PM
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    materialsMonthContainer: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    materialsMonthInputText: {
        fontSize: 40,
        marginTop: '-20%',
        textAlign: 'center',
        color: Colors.white,
        marginBottom: 5,
    },
    materialsMonthLayerColor: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.greenLight,
    },
    materialsMonthButton: {
        backgroundColor: Colors.blueDark,
        color: Colors.white,
        width: '90%',
        height: '10%',
        marginTop: '10%',
        borderRadius: 50,
        borderWidth: 1,
    },
    materialsMonthButtonText: {
        marginTop: '4%',
        marginLeft: '30%',
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.white,
    },
    materialsMonthButton1: {
        backgroundColor: Colors.blueDark,
        color: Colors.white,
        width: '90%',
        height: '10%',
        marginTop: '8%',
        borderRadius: 50,
        borderWidth: 1,
    },
    materialsMonthButtonText1: {
        marginTop: '4%',
        marginLeft: '2%',
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.white,
    },
    materialsMonthText: {
        width: '60%',
        marginLeft: '-30%',
        marginTop: '5%',
        fontSize: 18,
        fontWeight: 'bold',
    },
    materialsMonthText1: {
        width: '25%',
        marginLeft: '60%',
        marginTop: '-15%',
        fontSize: 18,
        fontWeight: 'bold',
    },
    monthIcon1: {
        width: '90%',
        height: '95%',
        marginTop: '5%',
        marginLeft: '10%',
    },
    bottleImageMonthBack: {
        width: '18%',
        height: '90%',
        marginTop: '-12.5%',
        marginLeft: '8%',
        backgroundColor: Colors.greenLight,
        borderRadius: 70,
    },
    monthIcon2: {
        width: '90%',
        height: '95%',
        marginTop: '5%',
        marginLeft: '10%',
    },
    canImageMonthBack: {
        width: '18%',
        height: '90%',
        marginTop: '-12.5%',
        marginLeft: '8%',
        backgroundColor: Colors.greenLight,
        borderRadius: 70,
    },
});

export default MaterialsMonth;