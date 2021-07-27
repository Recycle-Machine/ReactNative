import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from 'react-native'
import Colors from '../../res/Colors'

    const friendsImage = {
        uri: 'https://www.dropbox.com/s/ziyj8jdbk1xyvo6/friends.png?raw=1',
    };
    const careerImage = {
        uri: 'https://www.dropbox.com/s/jynq9pd7tlg7xin/career.png?raw=1',
    };
    const schoolsImage = {
        uri: 'https://www.dropbox.com/s/5cmpxsgy1j63qwi/school.png?raw=1',
    };

class ScoreBoards extends React.Component {
    handlePress = () => {
        this.props.navigation.navigate('Land');
    };

    render() {
        return (
            <View style={styles.scoreContainer}>
                <View style={styles.scoreLayerColor}>
                    <Text style={styles.scoreInputText}>ScoreBoards</Text>
                    <TouchableOpacity style={styles.scoreButton} onPress={this.handlePress}>
                        <Text style={styles.scoreButtonText}>Friends</Text>
                        <ImageBackground style={styles.icon1} source={friendsImage}></ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.scoreButton} onPress={this.handlePress}>
                        <Text style={styles.scoreButtonText}>Carrer</Text>
                        <ImageBackground style={styles.icon2} source={careerImage}></ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.scoreButton} onPress={this.handlePress}>
                        <Text style={styles.scoreButtonText}>Schools</Text>
                        <ImageBackground style={styles.icon3} source={schoolsImage}></ImageBackground>
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
        color: Colors.white,
        marginBottom: 5,
    },
    scoreLayerColor: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.greenLight,
    },
    scoreButton: {
        backgroundColor: Colors.blueDark,
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
        width: '45%',
        height: '90%',
        marginTop: '-15%',
        marginLeft: '4%'
    },
    icon2: {
        width: '45%',
        height: '90%',
        marginTop: '-15%',
        marginLeft: '4%'
    },
    icon3: {
        width: '45%',
        height: '90%',
        marginTop: '-15%',
        marginLeft: '4%'
    },
});

export default ScoreBoards;