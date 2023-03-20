import React from 'react'
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, View, useWindowDimensions, Image, Pressable} from 'react-native'
import logo from '../../assets/images/logowhite.png'
import HomeScreen from './HomeScreen'

const LoginScreen = () => {
    const {height} = useWindowDimensions();
    return(
      
        <View style={styles.root}>
            <Image 
            source = {logo} 
            style = {[styles.logo, {height: height * 0.2}]} 
            resizeMode = "contain"
            />

            <Text style = {styles.titulo}>Bienvenido/a</Text>
                <Text style = {styles.subtitulo}>Inicia Sesión</Text>
                <TextInput
                    placeholder = "Correo electrónico"
                    //value = {}
                    //onChangeText = {text => }
                    style = {styles.textInput}
                    >
                </TextInput>
                <TextInput
                    placeholder = "Contraseña"
                    //value = {}
                    //onChangeText = {text => }
                    style = {styles.textInput}
                    secureTextEntry
                    >
                    </TextInput>
                <Pressable>
                <View>
                    <Text style = {styles.button2}>¿Olvidaste tu contraseña?</Text>
                  </View>
                  <View>
                    <Text style = {styles.button} onPress={() => navigation.navigate('HomeScreen')}>Ingresar </Text>
                    
                  </View>
                  <View>
                    <Text style = {styles.button3}>¿No tienes una cuenta? Crea una aquí</Text>
                  </View>
                  
                </Pressable>
        </View>
    )

    
}

export default LoginScreen

const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#f1f1f1',
      alignItems: 'center',
      justifyContent: 'center',
      padding:20
    },
    logo:{
        
        width: '60%',
        maxWidth: 300,
        
    },
    
    titulo:{
      fontSize: 30,
      color: '#34434D',
      fontWeight: 'bold',
    },
    subtitulo:{
      fontSize: 20,
      color: '#3CACAE',
   
    },
    textInput:{
      padding: 10,
      paddingStart: 30,
      width: '80%',
      height: 50,
      marginTop: 20,
      borderRadius: 30,
      backgroundColor: '#fff'
      
    },
    button:{
      backgroundColor:"#34434D",
      color: 'white',
      fontWeight: 'bold',
      width: '100%',
      padding: 10,
      marginVertical: 5,
      alignItems: 'center',
      borderRadius: 5
      

    },
    button2:{
      backgroundColor:"#f1f1f1",
      color: '#567184',

      width: '100%',
      padding: 10,
      marginVertical: 5,
      alignItems: 'right',
      borderRadius: 5
      

    },
     button3:{
      backgroundColor:"#f1f1f1",
      color: '#567184',
      fontWeight: 'bold',
      width: '100%',
      padding: 10,
      marginVertical: 5,
      alignItems: 'center',
      borderRadius: 5
      

    }
    
    
    
})

