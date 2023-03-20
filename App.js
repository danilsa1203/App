import React,{useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStackNavigator from "./navigation/navigator"
const App = () => {
  return(
    <NavigationContainer>
      <HomeStackNavigator 
      screenOptions = {{
        headerShown: false
      }}
      />
    </NavigationContainer>
  )
}
export default App;





