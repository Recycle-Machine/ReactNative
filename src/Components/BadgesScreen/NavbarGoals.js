import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Colors from '../../res/Colors'
import Goals from '../Goals/Goals'
import GoalsDaily from '../Goals/GoalsDaily'
import GoalsYearly from '../Goals/GoalsYearly'
import GoalsMonthly from '../Goals/GoalsMonthly'

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

const NavbarGoals = () => {
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
                name="GoalsDaily"
                component={GoalsDaily}
                options={{
                    tabBarIcon: ({size, color}) => (
                            <Image style={{tintColor: color, width: size, height: size}} 
                            source={signupIcon}
                        />
                    ),
                }}
            />
            <Tab.Screen 
                name="GoalsMonthly"
                component={GoalsMonthly}
                options={{
                    tabBarIcon: ({size, color}) => (
                            <Image style={{tintColor: color, width: size, height: size}} 
                            source={loginIcon}
                        />
                    ),
                }}
            />
            <Tab.Screen 
                name="GoalsYearly"
                component={GoalsYearly}
                options={{
                    tabBarIcon: ({size, color}) => (
                            <Image style={{tintColor: color, width: size, height: size}} 
                            source={loginIcon}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default NavbarGoals;