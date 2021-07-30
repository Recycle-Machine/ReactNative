import React from 'react'
import { 
    View, 
    ActivityIndicator, 
    StyleSheet, 
    FlatList,
    StatusBar,
} from 'react-native'
import ScoreDesign from './ScoreDesign'
import Colors from '../../res/Colors'
import Http from '../../libs/http'

class ScoreFriends extends React.Component{
    state = {
        loading: false,
        badges: [],
    }
    
    componentDidMount(){
        this.fetchdata();
    }
    fetchdata = async() => {
        console.log('Fetching data');
        this.setState({loading: true});
        let response = await Http.instance.get_all();
        this.setState({loading: false, badges: response});
    };



    render(){
        const {badges, loading} = this.state;
        
        return(
            <View style={[styles.container, styles.horizontal]}>
                {loading ? (
                    <ActivityIndicator
                        style={styles.loader}
                        color={Colors.blueDark}
                        size="large"
                    />
                ) : null}
                <StatusBar backgroundColor="transparent" translucent={true} />
                <FlatList 
                style={styles.list} 
                data={badges} 
                renderItem={({item}) => <ScoreDesign item={item} />}
                keyExtractor = {(item, index) => index.toString()}
                />  
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.black,
        paddingTop: 30,
    },
    horizontal:{
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    loader:{
        height: '100%',
        paddingHorizontal: 10,
    },
    list:{
        width: '100%',
        paddingHorizontal: 10,
    },
});

export default ScoreFriends;