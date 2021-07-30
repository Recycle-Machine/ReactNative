import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Colors from '../../res/Colors'
import ScoreSchool from '../ScoreBoards/ScoreSchool'
import ScoreFriends from '../ScoreBoards/ScoreFriends'

const Tab = createBottomTabNavigator();

const careerIcon = {
    uri: 'https://www.dropbox.com/s/jynq9pd7tlg7xin/career.png?raw=1',
};
const schoolIcon = {
    uri: 'https://www.dropbox.com/s/5cmpxsgy1j63qwi/school.png?raw=1',
};

const NavbarScores = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                showIcon: true,
                tintColor: Colors.white,
                activeTintColor: Colors.white,
                style: {
                    backgroundColor: Colors.black,
                },
            }}
        >
            <Tab.Screen 
                name="ScoreFriends"
                component={ScoreFriends}
                options={{
                    tabBarIcon: ({size, color}) => (
                            <Image style={{tintColor: color, width: size, height: size}} 
                            source={careerIcon}
                        />
                    ),
                }}
            />
            <Tab.Screen 
                name="ScoreSchool"
                component={ScoreSchool}
                options={{
                    tabBarIcon: ({size, color}) => (
                            <Image style={{tintColor: color, width: size, height: size}} 
                            source={schoolIcon}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default NavbarScores;