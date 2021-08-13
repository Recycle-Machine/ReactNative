import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
 } from 'react-native'
import Colors from '../../res/Colors'

    class ScoreDesign extends React.Component{
        render(){
            const {item} = this.props;
            return(
            <View style={styles.container}>
                    <View style={styles.row}>
                        <Image 
                            style={styles.profile} 
                            source={{uri: 'https://www.dropbox.com/s/cr20fmv2n58401k/Street_Food-amico.png?raw=1' }} 
                    />
                    <View style={styles.userData}>
                        <Text style={styles.nameText}> {item.name} </Text>
                        <Text style={styles.cityText}> {item.city} </Text>
                        <Text style={styles.score}>Score</Text>
                        <Text style={styles.scoreValue}> {item.age} </Text>
                        </View>
                    </View>
            </View>
            );
        }
    }
    
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
            borderBottomColor: Colors.blueDark,
            backgroundColor: Colors.greenDark,
            borderBottomWidth: 1, 
        },
        row:{
            flexDirection: 'row',
        },
        profile:{
            width: 55,
            height: 55,
            borderRadius: 50,
            resizeMode: 'cover',
        },
        nameText:{
            fontSize: 20,
            fontWeight: 'bold',
            paddingLeft: 20,
            color: Colors.white,
        },
        cityText:{
            fontWeight: '100',
            paddingLeft: 20,
            color: Colors.white
        },
        score: {
            marginTop: '-15%',
            marginLeft: '70%',
            fontSize: 18,
            color: Colors.white,
        },
        scoreValue: {
            marginTop: '1%',
            marginLeft: '73%',
            fontSize: 18,
            color: Colors.white,
        },
    });

    export default ScoreDesign;