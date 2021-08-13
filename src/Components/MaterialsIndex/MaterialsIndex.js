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

    const materialsIndexImage = {
        uri: 'https://www.dropbox.com/s/43mkiz2sqxcdwcj/tree-plant.png?raw=1',
    };
    const materialsBottleImage = {
        uri: 'https://www.dropbox.com/s/ziyj8jdbk1xyvo6/friends.png?raw=1',
    };
    const materialsCanImage = {
        uri: 'https://www.dropbox.com/s/jynq9pd7tlg7xin/career.png?raw=1',
    };

    class MaterialsIndex extends React.Component{
        handlePress = () => {
            this.props.navigation.navigate('Materials Today');
        };

        render(){
            return(
                <View style={styles.materialsContainer}>
                    <StatusBar backgroundColor="transparent" translucent={true} />
                        <View style={styles.materialsLayerColor}>
                            <View style={styles.materialsTextContainer}>
                            <Text style={styles.materialsText}>Luis Sigala</Text>
                            <Text style={styles.materialsText}>Joined on 12/07/2020</Text>
                            <Text style={styles.materialsText}>Started on 14/07/202</Text>
                            </View>
                            <TouchableOpacity style={styles.materialsButton1} onPress={this.handlePress}>
                                <Text style={styles.materialsButtonText1}>68 kgs contributed total</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.materialsButton} onPress={this.handlePress}>
                                <Text style={styles.materialsButtonText}>22 kgs of plastic</Text>
                                <ImageBackground style={styles.materialsIcon1} source={materialsBottleImage}></ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.materialsButton} onPress={this.handlePress}>
                                <Text style={styles.materialsButtonText}>24 kgs of aluminum</Text>
                                <ImageBackground style={styles.materialsIcon2} source={materialsCanImage}></ImageBackground>
                            </TouchableOpacity>
                            <ImageBackground source={materialsIndexImage} style={styles.materialsImage}></ImageBackground>
                        </View>
                </View>
            );
        }
    }

    const styles = StyleSheet.create({
        materialsContainer: {
            flex: 1,
        },
        materialsLayerColor: {
            backgroundColor: Colors.greenLight,
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
        },
        materialsImage: {
            height: '20%',
            width: '60%',
            marginTop: '-125%',
            marginLeft: '-30%',
            flex: 1,
            resizeMode: 'cover',
        },
        materialsText: {
            color: Colors.black,
            marginLeft: '40%',
            marginTop: '2%',
            fontSize: 20,
            fontWeight: 'bold',
        },
        materialsTextContainer: {
            marginTop: '10%',
            marginLeft: '-10%',
        },
        materialsButton: {
            backgroundColor: Colors.blueDark,
            color: Colors.white,
            width: '80%',
            height: '10%',
            padding: 15,
            marginTop: '10%',
            borderRadius: 50,
            borderWidth: 1,
        },
        materialsButtonText: {
            marginLeft: '30%',
            fontSize: 22,
            fontWeight: 'bold',
            color: Colors.white,
        },
        materialsButton1: {
            backgroundColor: Colors.blueDark,
            color: Colors.white,
            width: '80%',
            height: '10%',
            padding: 15,
            marginTop: '20%',
            borderRadius: 50,
            borderWidth: 1,
        },
        materialsButtonText1: {
            marginTop: '-2%',
            marginLeft: '5%',
            fontSize: 30,
            fontWeight: 'bold',
            color: Colors.white,
        },
        materialsIcon1: {
            width: '45%',
            height: '90%',
            marginTop: '-10%',
            marginLeft: '4%'
        },
        materialsIcon2: {
            width: '45%',
            height: '90%',
            marginTop: '-10%',
            marginLeft: '4%'
        },
    });

    export default MaterialsIndex;