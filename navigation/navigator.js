import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../src/Screens/HomeScreen'
import Detail from '../src/Screens/Detail'
import Favourite from '../src/Screens/Favourite'
import Profile from '../src/Screens/Profile'
import Chat from '../src/Screens/Chat'
import Adopt from '../src/Screens/Adopt'
import ChatScreen from '../src/Screens/ChatScreen';
import {Image} from 'react-native'


const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                style:{
                    height:65,
                    justifyContent:"center",
                    paddingVertical:15,
                    backgroundColor:"#eff4f0",
                    elevation:2
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../assets/images/home.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Detalle"
                component={Detail}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../assets/images/home.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />
            <Tab.Screen
            
                name="Dar en Adopción"
                component={Adopt}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../assets/images/adopt.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />

            

            <Tab.Screen
            
                name="Chat"
                component={Chat}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../assets/images/chat-icon.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />

            <Tab.Screen
                //Store
                name="Productos"
                component={Favourite}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../assets/images/shop.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />

            
            
            
            <Tab.Screen
            //Login
                name="Perfil"
                component={Profile}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../assets/images/login.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

const MessageStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={({route}) => ({
        title: route.params.userName,
        headerBackTitleVisible: false,
      })}
    />
  </Stack.Navigator>
);

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={BottomTabNavigator}/>
            <Stack.Screen name="Detalles" component={Detail}/>
        </Stack.Navigator>
    )
}

export default HomeStackNavigator;