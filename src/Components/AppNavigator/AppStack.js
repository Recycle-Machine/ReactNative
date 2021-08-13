import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Colors from '../../res/Colors'
import Map from '../Map/Map'
import LogIn from '../LogIn/LogIn'
import Landing from '../Landing/Landing'
import Profile from '../Profile/Profile'
import MapMachine from '../Map/MapMachine'
import Navbar from '../BadgesScreen/Navbar'
import EditProfile from '../Profile/EditProfile'
import NavbarGoals from '../BadgesScreen/NavbarGoals'
import NavbarScores from '../BadgesScreen/NavbarScores'
import BadgeLanding from '../BadgeLanding/BadgeLanding'
import NavbarDivisions from '../BadgesScreen/NavbarDivisions'
import QRreader from '../Transactions/QRreader'
import transactionsUser from '../Transactions/transactionsUser'
import Transactions from '../Transactions/transactions'

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
            <Stack.Screen name="transactionUser" component={transactionsUser} />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="Login" component={LogIn} />
            <Stack.Screen name="Land" component={Landing} />
            <Stack.Screen name="Navbar" component={Navbar} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="MapMachine" component={MapMachine} />
            <Stack.Screen name="NavbarGoals" component={NavbarGoals} />
            <Stack.Screen name="Edit Profile" component={EditProfile}/>
            <Stack.Screen name="NavbarScores" component={NavbarScores} />
            <Stack.Screen name="NavbarDivisions" component={NavbarDivisions} />
            <Stack.Screen name="QR" component={QRreader} />
            <Stack.Screen name="Transactions" component={Transactions} />
        
        </Stack.Navigator>
    );
};

export default AppStack;