import {Color} from 'chalk';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Pressable,
} from 'react-native';

class TransactionItem extends React.Component {
    render() {
        const {item} = this.props;
        return (
            <View style={styles.container}>
          <View style={styles.row}>
          <Image 
                            style={styles.profile} 
                            source={{uri: 'https://www.dropbox.com/s/cr20fmv2n58401k/Street_Food-amico.png?raw=1' }} 
                    />
            <View style={styles.userData}>
              <Text style={styles.nameText}> {item.username}</Text>
              <Text style={styles.cityText}><Text>Machine:</Text> {item.machine}</Text>
              <Text style={styles.score}><Text>Glass: </Text> {item.glass}</Text>
              <Text style={styles.scoreValue}><Text>Aluminum: </Text> {item.aluminum}</Text>
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
        borderBottomColor: "#FFFFFF",
        borderBottomWidth: 1,
      },
      row: {
        flexDirection: 'row',
      },
      profile: {
        width: 55,
        height: 55,
        borderRadius: 50,
        resizeMode: 'cover',
      },
      nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 20,
        color: "#FFFFFF",
      },
      cityText: {
        fontWeight: 'normal',
        paddingLeft: 20,
        color: "#FFFFFF",
      },
      score: {
        marginTop: '-15%',
        marginLeft: '67%',
        fontSize: 18,
        color: "#FFFFFF",
    },
    scoreValue: {
        marginTop: '1%',
        marginLeft: '55%',
        fontSize: 18,
        color: "#FFFFFF",
    },

});

export default TransactionItem;