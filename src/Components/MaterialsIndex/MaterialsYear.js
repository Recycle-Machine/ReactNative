import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from 'react-native'
import Colors from '../../res/Colors'

    const bottleImage1Year = {
        uri: 'https://www.dropbox.com/s/td9t6fs54ttdsbd/icons8-botella-de-agua-50.png?raw=1',
    };
    const canImage1Year = {
        uri: 'https://www.dropbox.com/s/ewr3ngkalfox4lx/icons8-bote-de-cerveza-50.png?raw=1',
    };

class MaterialsYear extends React.Component {
    handlePress = () => {
        this.props.navigation.navigate('Materials Month');
    };

    render() {
        return (
            <View style={styles.materialsYearContainer}>
                <View style={styles.materialsYearLayerColor}>
                    <Text style={styles.materialsYearInputText}>This Year</Text>
                    <TouchableOpacity style={styles.materialsYearButton1} onPress={this.handlePress}>
                        <Text style={styles.materialsYearButtonText1}>11 kgs contributted in this year</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.materialsYearButton} onPress={this.handlePress}>
                        <Text style={styles.materialsYearButtonText}>4 kgs of aluminum</Text>
                        <View style={styles.bottleImageYearBack}>
                        <ImageBackground style={styles.yearIcon1} source={bottleImage1Year}></ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.materialsYearText}>
                        Km 3.5 Carretera Chihuahua a
                        Aldama Colinas de León, 31313
                        Chihuahua, Chih
                    </Text>
                    <Text style={styles.materialsYearText1}>
                        20/06/2021
                        04:46 PM
                    </Text>
                    <TouchableOpacity style={styles.materialsYearButton} onPress={this.handlePress}>
                        <Text style={styles.materialsYearButtonText}>5 kgs of plastic</Text>
                        <View style={styles.canImageYearBack}>
                        <ImageBackground style={styles.yearIcon2} source={canImage1Year}></ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.materialsYearText}>
                        Km 3.5 Carretera Chihuahua a
                        Aldama Colinas de León, 31313
                        Chihuahua, Chih
                    </Text>
                    <Text style={styles.materialsYearText1}>
                        20/06/2021
                        04:46 PM
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    materialsYearContainer: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    materialsYearInputText: {
        fontSize: 40,
        marginTop: '-20%',
        textAlign: 'center',
        color: Colors.white,
        marginBottom: 5,
    },
    materialsYearLayerColor: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.greenLight,
    },
    materialsYearButton: {
        backgroundColor: Colors.blueDark,
        color: Colors.white,
        width: '90%',
        height: '10%',
        marginTop: '10%',
        borderRadius: 50,
        borderWidth: 1,
    },
    materialsYearButtonText: {
        marginTop: '4%',
        marginLeft: '30%',
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.white,
    },
    materialsYearButton1: {
        backgroundColor: Colors.blueDark,
        color: Colors.white,
        width: '90%',
        height: '10%',
        marginTop: '8%',
        borderRadius: 50,
        borderWidth: 1,
    },
    materialsYearButtonText1: {
        marginTop: '4%',
        marginLeft: '2%',
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.white,
    },
    materialsYearText: {
        width: '60%',
        marginLeft: '-30%',
        marginTop: '5%',
        fontSize: 18,
        fontWeight: 'bold',
    },
    materialsYearText1: {
        width: '25%',
        marginLeft: '60%',
        marginTop: '-15%',
        fontSize: 18,
        fontWeight: 'bold',
    },
    yearIcon1: {
        width: '90%',
        height: '95%',
        marginTop: '5%',
        marginLeft: '10%',
    },
    bottleImageYearBack: {
        width: '18%',
        height: '90%',
        marginTop: '-12.5%',
        marginLeft: '8%',
        backgroundColor: Colors.greenLight,
        borderRadius: 70,
    },
    yearIcon2: {
        width: '90%',
        height: '95%',
        marginTop: '5%',
        marginLeft: '10%',
    },
    canImageYearBack: {
        width: '18%',
        height: '90%',
        marginTop: '-12.5%',
        marginLeft: '8%',
        backgroundColor: Colors.greenLight,
        borderRadius: 70,
    },
});

export default MaterialsYear;