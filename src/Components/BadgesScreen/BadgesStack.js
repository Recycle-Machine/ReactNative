import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LogIn from '../LogIn/LogIn'
import SignUp from '../SignUp/SignUp'
import Landing from '../Landing/Landing'
import Profile from '../Profile/Profile'
import EditProfile from '../EditProfile/EditProfile'
import ScoreBoards from '../ScoreBoards/ScoreBoards'
import BadgeLanding from '../BadgeLanding/BadgeLanding'

const Stack = createStackNavigator(); 

const BadgesStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name='Landing' 
            component={BadgeLanding} 
            options={{headerShown: false}}
            />
            <Stack.Screen name="Login" component={LogIn}/>
            <Stack.Screen name="Land" component={Landing}/>
            <Stack.Screen name="Sign up" component={SignUp}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="Scoreboards" component={ScoreBoards}/>
            <Stack.Screen name="Edit Profile" component={EditProfile}/>
           </Stack.Navigator>
    )
}

export default BadgesStack;