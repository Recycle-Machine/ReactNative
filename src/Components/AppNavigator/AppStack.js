import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Colors from '../../res/Colors'
import Navbar from '../BadgesScreen/Navbar'
import EditProfile from '../Profile/EditProfile'
import NavbarGoals from '../BadgesScreen/NavbarGoals'
import BadgeLanding from '../BadgeLanding/BadgeLanding'
import NavbarDivisions from '../BadgesScreen/NavbarDivisions'

const Stack = createStackNavigator();

const AppStack = () => {
    return(
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    BackgroundColor: Colors.black,
                    shadowColor: Colors.black,
                },
                headerTintColor: Colors.white,
            }}>

            <Stack.Screen
            name="Landing"
            component={BadgeLanding}
            options={{headerShown: false}}
            />

            <Stack.Screen name="Navbar" component={Navbar} />
            <Stack.Screen name="NavbarGoals" component={NavbarGoals} />
            <Stack.Screen name="Edit Profile" component={EditProfile}/>
            <Stack.Screen name="NavbarDivisions" component={NavbarDivisions} />
        </Stack.Navigator>
    );
};

export default AppStack;