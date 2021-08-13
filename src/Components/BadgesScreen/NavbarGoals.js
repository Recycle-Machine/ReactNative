import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Colors from '../../res/Colors'
import Goals from '../Goals/Goals'
import GoalsDaily from '../Goals/GoalsDaily'
import GoalsYearly from '../Goals/GoalsYearly'
import GoalsMonthly from '../Goals/GoalsMonthly'

const Tab = createBottomTabNavigator();

const goalsIcon = {
    uri: 'https://www.dropbox.com/s/x90qaa465zkq7zf/icons8-bandera-alfa-90.png?raw=1',
};

const NavbarGoals = () => {
    return(
        <Tab.Navigator
            screenOptions={{
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
                            source={goalsIcon}
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
                            source={goalsIcon}
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
                            source={goalsIcon}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default NavbarGoals;