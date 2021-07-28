import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Map from '../Map/Map'
import LogIn from '../LogIn/LogIn'
import SignUp from '../SignUp/SignUp'
import Landing from '../Landing/Landing'
import Profile from '../Profile/Profile'
import MapMachine from '../MapMachine/MapMachine'
import EditProfile from '../EditProfile/EditProfile'
import ScoreBoards from '../ScoreBoards/ScoreBoards'
import BadgeLanding from '../BadgeLanding/BadgeLanding'
import MaterialsYear from '../MaterialsYear/MaterialsYear'
import MaterialsToday from '../MaterialsToday/MaterialsToday'
import MaterialsMonth from '../MaterialsMonth/MaterialsMonth'
import MaterialsIndex from '../MaterialsIndex/MaterialsIndex'

const Stack = createStackNavigator(); 

const BadgesStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name='Landing' 
            component={BadgeLanding}
            options={{headerShown: false}}
            />
            <Stack.Screen name="Map" component={Map}/>
            <Stack.Screen name="Login" component={LogIn}/>
            <Stack.Screen name="Land" component={Landing}/>
            <Stack.Screen name="Sign up" component={SignUp}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="Machine" component={MapMachine}/>
            <Stack.Screen name="Scoreboards" component={ScoreBoards}/>
            <Stack.Screen name="Edit Profile" component={EditProfile}/>
            <Stack.Screen name="Materials" component={MaterialsIndex}/>
            <Stack.Screen name="Materials Year" component={MaterialsYear}/>
            <Stack.Screen name="Materials Today" component={MaterialsToday}/>
            <Stack.Screen name="Materials Month" component={MaterialsMonth}/>
           </Stack.Navigator>
    )
}

export default BadgesStack;