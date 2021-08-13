import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    ActivityIndicator,
    StatusBar,
    FlatList,
    Alert,
} from 'react-native'
import Http from '../../libs/http';
import TransactionItem from './transactionItem';

class transactionsUser extends React.Component{
    state = {
        loading: false,
        transactions: undefined,
        transactionsCopy: undefined,
    };

    componentDidMount() {
        this.fetchData();
    }


    fetchData = async () => {
        console.log('Fetching data');
        this.setState({loading: true});
        let response = await Http.instance.get_all_transaction_username();
        response = response.reverse();
        this.setState({loading: false, transactions: response, transactionsCopy: response})
    };
    
    render() {
        const {transactions, loading} = this.state;

        if (loading === true && !transactions) {
            return(
                <View style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator
                    style={styles.loader}
                    color="#43FF0D"
                    size="large"
                />
                </View>
            );
        }
        return (
            <View style={[styles.container, styles.horizontal]}>
                <StatusBar backgroundColor="transparent" transluent={false} />
                <FlatList
                style={styles.list}
                data={transactions}
                renderItem={({item}) => <TransactionItem item={item} />}
                    keyExtractor={(item, index) => index.toString()}
                    /> 
            </View>
            
        );
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: "#5CDB95",
    },
    horizontal: {
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    loader: {
      height: '100%',
      paddingHorizontal: 10,
    },
    list: {
      width: '100%',
      paddingHorizontal: 10,
    },
  });

export default transactionsUser