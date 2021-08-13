import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NavbarDivisions from './NavbarDivisions'
import SignUp from '../SignUp/SignUp'
import LogIn from '../LogIn/LogIn'
import Colors from '../../res/Colors'

const Tab = createBottomTabNavigator();

const signupIcon = {
    uri: 'https://www.dropbox.com/s/ttbh3qexk6qo3sf/icons8-identificaci%C3%B3n-verificada-30.png?raw=1',
};
const loginIcon = {
    uri: 'https://www.dropbox.com/s/0tdmcc0elkcg17e/icons8-usuario-30_1.png?raw=1',
};

const Navbar = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                showIcon: true,
                tintColor: Colors.white,
                activeTintColor: Colors.blueDark,
                style: {
                    backgroundColor: Colors.black,
                },
            }}
        >
            <Tab.Screen 
                name="Login"
                component={LogIn}
                options={{
                    tabBarIcon: ({size, color}) => (
                            <Image style={{tintColor: color, width: size, height: size}} 
                            source={loginIcon}
                        />
                    ),
                }}
            />
            <Tab.Screen 
                name="Sign up"
                component={SignUp}
                options={{
                    tabBarIcon: ({size, color}) => (
                            <Image style={{tintColor: color, width: size, height: size}} 
                            source={signupIcon}
                        />
                    ),
                }}
            />
            
        </Tab.Navigator>
    );
};

export default Navbar;