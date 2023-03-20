import React from 'react';
import { MultipleSelectList } from 'react-native-dropdown-select-list'


import {
  KeyboardAvoidingView,
  StyleSheet,
  CheckBox,
  Text,
  TextInput,
  View,
  useWindowDimensions,
  Image,
  Pressable,
} from 'react-native';
import logo from '../../assets/images/logowhite.png';
import HomeScreen from './HomeScreen';

const LoginScreen = () => {
  const [isSelected, setSelection] = React.useState([]);
  const data = [
      {key:'1', value:'Mobiles', disabled:true},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers', disabled:true},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]
  const { height } = useWindowDimensions();
  return (
    <View style={styles.root}>
      

      <Text style={styles.titulo}>Dar en Adopción</Text>
      <Text style={styles.subtitulo}>Completa los datos a continuación:</Text>

      <Text style={styles.dato}>Imagen:</Text>
      <Text style={styles.dato}>Nombre de la mascota:</Text>
      <TextInput
        placeholder="Nombre"
        //value = {}
        //onChangeText = {text => }
        style={styles.textInput}></TextInput>

        <Text style={styles.dato}>Fecha de nacimiento:</Text>
      <TextInput

        placeholder="Fecha de nacimiento"
        //value = {}
        //onChangeText = {text => }
        style={styles.textInput}
        >
        </TextInput>

        <Text style={styles.dato}>Tipo de animal:</Text>
        <TextInput
        placeholder="Tipo de animal"
        //value = {}
        //onChangeText = {text => }
        style={styles.textInput}
        >
        </TextInput>

        <Text style={styles.dato}>Ubicación:</Text>
        <TextInput
        placeholder="Ubicación"
        //value = {}
        //onChangeText = {text => }
        style={styles.textInput}
        >
        </TextInput>

       
        <Text style={styles.dato}>Raza:</Text>
        <TextInput
        placeholder="Raza"
        //value = {}
        //onChangeText = {text => }
        style={styles.textInput}
        >
        </TextInput>

      <Pressable>
        <View>
          <Text
            style={styles.button}
            >
            Enviar
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: '60%',
    maxWidth: 300,
  },
checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
},
  titulo: {
    fontSize: 30,
    color: '#34434D',
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 20,
    color: '#3CACAE',
  },
  dato: {
    fontSize: 15,
    color: '#34434D',
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 5,
    borderRadius: 30,
    backgroundColor: '#f1f1f1',
  },
  button: {
    backgroundColor: '#34434D',
    color: 'white',
    fontWeight: 'bold',
    width: '100%',
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },

});
