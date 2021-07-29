import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    ImageBackground, 
    TouchableOpacity, 
    StatusBar,
 } from 'react-native'
import Colors from '../../res/Colors'
    const imageBackground = {
        uri: 'https://www.dropbox.com/s/43mkiz2sqxcdwcj/tree-plant.png?raw=1',
    };

    class BadgeLanding extends React.Component{
        handlePress = () => {
            this.props.navigation.replace('Navbar');
        };

        render(){
            return(
                <View style={styles.container}>
                    <StatusBar backgroundColor="transparent" translucent={true} />
                        <View style={styles.layerColor}>
                            <Text style={styles.title}>
                                Welcome!
                            </Text>
                            <ImageBackground source={imageBackground} style={styles.image}></ImageBackground>
                            <TouchableOpacity style={styles.button} onPress={this.handlePress}>
                                <Text style={styles.buttonText}>Save the world</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            );
        }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
        },
        layerColor: {
            backgroundColor: Colors.greenLight,
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            height: '102%',
            width: '100%',
            marginTop: '-15%',
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'center',
        },
        title: {
            margin: 30,
            marginTop: '20%',
            fontSize: 70,
            fontWeight: 'bold',
            color: Colors.white,
        },
        button: {
            width: '65%',
            padding: 15,
            marginBottom: '27%',
            borderRadius: 30,
            backgroundColor: Colors.blueDark,
            borderWidth: 1,
        },
        buttonText: {
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            paddingHorizontal: 25,
            color: Colors.white,
        },
    });

    export default BadgeLanding;