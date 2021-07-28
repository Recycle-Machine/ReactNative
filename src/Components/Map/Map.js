import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
} from 'react-native'
import Colors from '../../res/Colors'

    const mapImage = {
        uri: 'https://www.dropbox.com/s/hk1231db7pfsctt/mapa-movil.png?raw=1',
    };
    const Box1Image = {
        uri: 'https://www.dropbox.com/s/2bekvz47r9zzobi/machine.png?raw=1',
    };
    const Box2Image = {
        uri: 'https://www.dropbox.com/s/2bekvz47r9zzobi/machine.png?raw=1',
    };
    const Box3Image = {
        uri: 'https://www.dropbox.com/s/2bekvz47r9zzobi/machine.png?raw=1',
    };

class Map extends React.Component {
    handlePress = () => {
        this.props.navigation.navigate('Scoreboards');
    };

    render() {
        return(
            <View style={styles.loginContainer}>
                    <ImageBackground source={mapImage} style={styles.image}>
                                <ImageBackground style={styles.mapIcon} source={Box1Image} onPress={this.handlePress}></ImageBackground>
                                <ImageBackground style={styles.mapIcon1} source={Box2Image} onPress={this.handlePress}></ImageBackground>
                                <ImageBackground style={styles.mapIcon2} source={Box3Image} onPress={this.handlePress}></ImageBackground>
                    </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginContainer:{
        flex: 1,
    },
    image: {
        height: '100%',
        width: '100%',
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapIcon: {
        width: '40%',
        height: '30%',
        marginTop: '40%',
        marginLeft: '-60%',
    },
    mapIcon1: {
        width: '40%',
        height: '30%',
        marginTop: '-120%',
        marginLeft: '-20%',
    },
    mapIcon2: {
        width: '40%',
        height: '30%',
        marginTop: '-15%',
        marginLeft: '110%',
    },
});

export default Map;