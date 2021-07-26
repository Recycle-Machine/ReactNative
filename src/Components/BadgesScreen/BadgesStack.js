import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BadgeLanding from '../BadgeLanding/BadgeLanding'
import SignUp from '../SignUp/SignUp'
import LogIn from '../LogIn/LogIn'
import ScoreBoards from '../ScoreBoards/ScoreBoards'

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
            <Stack.Screen name="Sign up" component={SignUp}/>
            <Stack.Screen name="Scoreboards" component={ScoreBoards}/>
           </Stack.Navigator>
    )
}

export default BadgesStack;