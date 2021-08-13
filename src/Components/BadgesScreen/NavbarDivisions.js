import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Colors from '../../res/Colors'
import Goals from '../Goals/Goals'
import Landing from '../Landing/Landing'
import Profile from '../Profile/Profile'
import Map from '../Map/Map'
import ScoreBoards from '../ScoreBoards/ScoreBoards'
import Transactions from '../Transactions/transactions'

const Tab = createBottomTabNavigator();

const scoresIcon = {
    uri: 'https://www.dropbox.com/s/33acp0w6umru1sr/icons8-tabla-de-posiciones-100.png?raw=1',
};
const mapIcon = {
    uri: 'https://www.dropbox.com/s/hwqx5iptb30se3l/icons8-marcador-100.png?raw=1',
};
const goalsIcon = {
    uri: 'https://www.dropbox.com/s/x90qaa465zkq7zf/icons8-bandera-alfa-90.png?raw=1',
};
const profileIcon = {
    uri: 'https://www.dropbox.com/s/0tdmcc0elkcg17e/icons8-usuario-30_1.png?raw=1',
};
const transactionsIcon = {
    uri: 'https://www.dropbox.com/s/i87i4x4z9ckdj3y/icons8-signo-de-reciclaje-30.png?raw=1'
};

const NavbarDivisions = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                showIcon: true,
                tintColor: Colors.white,
                activeTintColor: Colors.blueDark,
                style: {
                    backgroundColor: Colors.black,
                },
            }}
        >
            <Tab.Screen 
                name="ScoreBoards"
                component={ScoreBoards}
                options={{
                    tabBarIcon: ({size, color}) => (
                            <Image style={{tintColor: color, width: size, height: size}} 
                            source={scoresIcon}
                        />
                    ),
                }}
            />
            <Tab.Screen 
                name="Transactions"
                component={Transactions}
                options={{
                    tabBarIcon: ({size, color}) => (
                            <Image style={{tintColor: color, width: size, height: size}} 
                            source={transactionsIcon}
                        />
                    ),
                }}
            />
            <Tab.Screen 
                name="Map"
                component={Map}
                options={{
                    tabBarIcon: ({size, color}) => (
                            <Image style={{tintColor: color, width: size, height: size}} 
                            source={mapIcon}
                        />
                    ),
                }}
            />
            <Tab.Screen 
                name="Goals"
                component={Goals}
                options={{
                    tabBarIcon: ({size, color}) => (
                            <Image style={{tintColor: color, width: size, height: size}} 
                            source={goalsIcon}
                        />
                    ),
                }}
            />
            <Tab.Screen 
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({size, color}) => (
                            <Image style={{tintColor: color, width: size, height: size}} 
                            source={profileIcon}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default NavbarDivisions;