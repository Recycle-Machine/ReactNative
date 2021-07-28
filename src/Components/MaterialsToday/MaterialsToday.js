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
        uri: 'https://www.dropbox.com/s/ziyj8jdbk1xyvo6/friends.png?raw=1',
    };
    const canImageToday = {
        uri: 'https://www.dropbox.com/s/jynq9pd7tlg7xin/career.png?raw=1',
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
                        <ImageBackground style={styles.todayIcon1} source={bottleImageToday}></ImageBackground>
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
                        <ImageBackground style={styles.todayIcon2} source={canImageToday}></ImageBackground>
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
        width: '40%',
        height: '90%',
        marginTop: '-12%',
        marginLeft: '6%'
    },
    todayIcon2: {
        width: '40%',
        height: '90%',
        marginTop: '-12%',
        marginLeft: '6%'
    },
});

export default MaterialsToday;