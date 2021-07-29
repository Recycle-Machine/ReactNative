import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Colors from '../../res/Colors'
import Landing from '../Landing/Landing'
import Profile from '../Profile/Profile'
import MapMachine from '../Map/MapMachine'
import ScoreBoards from '../ScoreBoards/ScoreBoards'
import NavbarGoals from '../BadgesScreen/NavbarGoals'

const Tab = createBottomTabNavigator();

const signupIcon = {
    uri: 'https://www.dropbox.com/s/td9t6fs54ttdsbd/icons8-botella-de-agua-50.png?raw=1',
};
const loginIcon = {
    uri: 'https://www.dropbox.com/s/td9t6fs54ttdsbd/icons8-botella-de-agua-50.png?raw=1',
};
const profileIcon = {
    uri: 'https://www.dropbox.com/s/0tdmcc0elkcg17e/icons8-usuario-30_1.png?raw=1',
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
                name="Land"
                component={Landing}
                options={{
                    tabBarIcon: ({size, color}) => (
                            <Image style={{tintColor: color, width: size, height: size}} 
                            source={signupIcon}
                        />
                    ),
                }}
            />
            <Tab.Screen 
                name="ScoreBoards"
                component={ScoreBoards}
                options={{
                    tabBarIcon: ({size, color}) => (
                            <Image style={{tintColor: color, width: size, height: size}} 
                            source={signupIcon}
                        />
                    ),
                }}
            />
            <Tab.Screen 
                name="MapMachine"
                component={MapMachine}
                options={{
                    tabBarIcon: ({size, color}) => (
                            <Image style={{tintColor: color, width: size, height: size}} 
                            source={loginIcon}
                        />
                    ),
                }}
            />
            <Tab.Screen 
                name="NavbarGoals"
                component={NavbarGoals}
                options={{
                    tabBarIcon: ({size, color}) => (
                            <Image style={{tintColor: color, width: size, height: size}} 
                            source={loginIcon}
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