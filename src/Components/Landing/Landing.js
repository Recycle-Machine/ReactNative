import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import Colors from '../../res/Colors'

class Landing extends React.Component {
    handlePress = () => {
        this.props.navigation.navigate('NavbarDivisions');
    };

    render() {
        return (
            <View style={styles.landContainer}>
                <View style={styles.landLayerColor}>
                    <Text style={styles.landInputText}>Feeling Like Recycling Today?</Text>
                    <Text style={styles.landInputText1}>
                        Find your nearest recycling station now
                        start recycling and earn wonderful rewards
                    </Text>
                    <TouchableOpacity style={styles.landButton} onPress={this.handlePress}>
                        <Text style={styles.landButtonText}>Main Menu</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    landContainer: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    landInputText: {
        width: '90%',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: '-40%',
        textAlign: 'center',
        color: Colors.white,
    },
    landInputText1: {
        width: '80%',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '1%',
        marginLeft: '-5%',
        textAlign: 'left',
        color: Colors.white,
    },
    landLayerColor: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.greenLight,
    },
    landButton: {
        backgroundColor: Colors.blueDark,
        color: Colors.white,
        width: '80%',
        height: '13%',
        padding: 15,
        marginTop: '50%',
        borderRadius: 50,
        borderWidth: 1,
    },
    landButtonText: {
        marginTop: '2%',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.white,
    },
});

export default Landing;