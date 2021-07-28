import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from 'react-native'
import Colors from '../../res/Colors'

    const bottleImageToday = {
        uri: 'https://www.dropbox.com/s/td9t6fs54ttdsbd/icons8-botella-de-agua-50.png?raw=1',
    };
    const canImageToday = {
        uri: 'https://www.dropbox.com/s/ewr3ngkalfox4lx/icons8-bote-de-cerveza-50.png?raw=1',
    };

class MaterialsToday extends React.Component {
    handlePress = () => {
        this.props.navigation.navigate('Materials Month');
    };

    render() {
        return (
            <View style={styles.materialsTodayContainer}>
                <View style={styles.materialsTodayLayerColor}>
                    <Text style={styles.materialsTodayInputText}>Today</Text>
                    <TouchableOpacity style={styles.materialsTodayButton1} onPress={this.handlePress}>
                        <Text style={styles.materialsTodayButtonText1}>11 kgs contributted today</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.materialsTodayButton} onPress={this.handlePress}>
                        <Text style={styles.materialsTodayButtonText}>4 kgs of aluminum</Text>
                        <View style={styles.bottleImageTodayBack}>
                        <ImageBackground style={styles.todayIcon1} source={bottleImageToday}></ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.materialsTodayText}>
                        Km 3.5 Carretera Chihuahua a
                        Aldama Colinas de León, 31313
                        Chihuahua, Chih
                    </Text>
                    <Text style={styles.materialsTodayText1}>
                        20/06/2021
                        04:46 PM
                    </Text>
                    <TouchableOpacity style={styles.materialsTodayButton} onPress={this.handlePress}>
                        <Text style={styles.materialsTodayButtonText}>5 kgs of plastic</Text>
                        <View style={styles.canImageTodayBack}>
                        <ImageBackground style={styles.todayIcon2} source={canImageToday}></ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.materialsTodayText}>
                        Km 3.5 Carretera Chihuahua a
                        Aldama Colinas de León, 31313
                        Chihuahua, Chih
                    </Text>
                    <Text style={styles.materialsTodayText1}>
                        20/06/2021
                        04:46 PM
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    materialsTodayContainer: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    materialsTodayInputText: {
        fontSize: 40,
        marginTop: '-20%',
        textAlign: 'center',
        color: Colors.white,
        marginBottom: 5,
    },
    materialsTodayLayerColor: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.greenLight,
    },
    materialsTodayButton: {
        backgroundColor: Colors.blueDark,
        color: Colors.white,
        width: '90%',
        height: '10%',
        marginTop: '10%',
        borderRadius: 50,
        borderWidth: 1,
    },
    materialsTodayButtonText: {
        marginTop: '4%',
        marginLeft: '30%',
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.white,
    },
    materialsTodayButton1: {
        backgroundColor: Colors.blueDark,
        color: Colors.white,
        width: '90%',
        height: '10%',
        marginTop: '8%',
        borderRadius: 50,
        borderWidth: 1,
    },
    materialsTodayButtonText1: {
        marginTop: '4%',
        marginLeft: '10%',
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.white,
    },
    materialsTodayText: {
        width: '60%',
        marginLeft: '-30%',
        marginTop: '5%',
        fontSize: 18,
        fontWeight: 'bold',
    },
    materialsTodayText1: {
        width: '25%',
        marginLeft: '60%',
        marginTop: '-15%',
        fontSize: 18,
        fontWeight: 'bold',
    },
    todayIcon1: {
        width: '90%',
        height: '90%',
        marginTop: '5%',
        marginLeft: '10%',
    },
    bottleImageTodayBack: {
        width: '18%',
        height: '90%',
        marginTop: '-12.5%',
        marginLeft: '8%',
        backgroundColor: Colors.greenLight,
        borderRadius: 70,
    },
    todayIcon2: {
        width: '90%',
        height: '95%',
        marginTop: '5%',
        marginLeft: '10%',
    },
    canImageTodayBack: {
        width: '18%',
        height: '90%',
        marginTop: '-12.5%',
        marginLeft: '8%',
        backgroundColor: Colors.greenLight,
        borderRadius: 70,
    },
});

export default MaterialsToday;