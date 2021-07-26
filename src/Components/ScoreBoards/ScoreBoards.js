import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import Colors from '../../res/Colors'

class ScoreBoards extends React.Component {
    handlePress = () => {
        this.props.navigation.navigate('Login');
    };

    render() {
        return (
            <View style={styles.scoreContainer}>
                <View style={styles.scoreLayerColor}>
                    <Text style={styles.scoreInputText}>ScoreBoards</Text>
                    <TouchableOpacity style={styles.scoreButton} onPress={this.handlePress}>
                        <Text style={styles.scoreButtonText}>Friends</Text>
                        <View style={styles.icon1}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.scoreButton} onPress={this.handlePress}>
                        <Text style={styles.scoreButtonText}>Carrer</Text>
                        <View style={styles.icon2}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.scoreButton} onPress={this.handlePress}>
                        <Text style={styles.scoreButtonText}>Schools</Text>
                        <View style={styles.icon3}></View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scoreContainer: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    scoreInputText: {
        fontSize: 40,
        marginTop: '-40%',
        textAlign: 'center',
        color: Colors.charade,
        marginBottom: 5,
    },
    scoreLayerColor: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scoreButton: {
        backgroundColor: Colors.Azabache,
        color: Colors.white,
        width: '80%',
        height: '13%',
        padding: 15,
        marginTop: '8%',
        borderRadius: 50,
        borderWidth: 1,
    },
    scoreButtonText: {
        marginTop: '2%',
        marginLeft: '30%',
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.white,
    },
    icon1: {
        backgroundColor: Colors.white,
        width: '20%',
        height: '90%',
        marginTop: '-15%',
        marginLeft: '5%'
    },
    icon2: {
        backgroundColor: Colors.white,
        width: '20%',
        height: '90%',
        marginTop: '-15%',
        marginLeft: '5%'
    },
    icon3: {
        backgroundColor: Colors.white,
        width: '20%',
        height: '90%',
        marginTop: '-15%',
        marginLeft: '5%'
    },
});

export default ScoreBoards;