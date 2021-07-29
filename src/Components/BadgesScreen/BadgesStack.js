import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Colors from '../../res/Colors'
import Map from '../Map/Map'
import Goals from '../Goals/Goals'
import LogIn from '../LogIn/LogIn'
import SignUp from '../SignUp/SignUp'
import Landing from '../Landing/Landing'
import Profile from '../Profile/Profile'
import MapMachine from '../Map/MapMachine'
import GoalsDaily from '../Goals/GoalsDaily'
import GoalsYearly from '../Goals/GoalsYearly'
import GoalsMonthly from '../Goals/GoalsMonthly'
import EditProfile from '../Profile/EditProfile'
import ScoreBoards from '../ScoreBoards/ScoreBoards'
import BadgeLanding from '../BadgeLanding/BadgeLanding'
import MaterialsYear from '../MaterialsIndex/MaterialsYear'
import MaterialsToday from '../MaterialsIndex/MaterialsToday'
import MaterialsMonth from '../MaterialsIndex/MaterialsMonth'
import MaterialsIndex from '../MaterialsIndex/MaterialsIndex'

const Stack = createStackNavigator(); 

const BadgesStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name='Landing' 
            component={BadgeLanding}
            options={{headerShown: false,
                headerStyle: {
                    BackgroundColor: Colors.black,
                },
            }}
            />
            <Stack.Screen name="Map" component={Map}/>
            <Stack.Screen name="Goals" component={Goals}/>
            <Stack.Screen name="Login" component={LogIn}/>
            <Stack.Screen name="Land" component={Landing}/>
            <Stack.Screen name="Sign up" component={SignUp}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="Machine" component={MapMachine}/>
            <Stack.Screen name="Daily Goals" component={GoalsDaily}/>
            <Stack.Screen name="Scoreboards" component={ScoreBoards}/>
            <Stack.Screen name="Yearly Goals" component={GoalsYearly}/>
            <Stack.Screen name="Edit Profile" component={EditProfile}/>
            <Stack.Screen name="Materials" component={MaterialsIndex}/>
            <Stack.Screen name="Monthly Goals" component={GoalsMonthly}/>
            <Stack.Screen name="Materials Year" component={MaterialsYear}/>
            <Stack.Screen name="Materials Today" component={MaterialsToday}/>
            <Stack.Screen name="Materials Month" component={MaterialsMonth}/>
           </Stack.Navigator>
    )
}

export default BadgesStack;