import React from 'react';
import { View, Text, Image } from 'react-native';
import SwiperComponent from '../../components/SwiperComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Detail = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF',
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: '90%',
        }}>
        <View style={{ width: '10%', paddingLeft: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              //source={require('../../assets/images/ramon.png')}
              style={{ marginVertical: 40 }}
            />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: '#FFF',
              height: 50,
              width: 50,
              borderRadius: 5,
              elevation: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 50,
            }}>
            <Image
            //source={require('../images/11.png')}
            />
          </View>
          <View
            style={{
              backgroundColor: '#FFF',
              height: 50,
              width: 50,
              borderRadius: 5,
              elevation: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 50,
            }}>
            <Image
            //source={require('../images/12.png')}
            />
          </View>
          <View
            style={{
              backgroundColor: '#FFF',
              height: 50,
              width: 50,
              borderRadius: 5,
              elevation: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 50,
            }}>
            <Image
            //source={require('../images/13.png')}
            />
          </View>
          <View
            style={{
              backgroundColor: '#FFF',
              height: 50,
              width: 50,
              borderRadius: 5,
              elevation: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 50,
            }}>
            <Image
            // source={require('../../assets/images/ramon.png')}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: -80,
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 28,
            color: '#62636a',
          }}>
          Ramón
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#3CACAE',
            paddingLeft: 170,
            fontSize: 20,
          }}>
          Masculino
        </Text>
      </View>

      <Text
        style={{
          paddingHorizontal: 20,
          fontWeight: 'bold',
          color: '#b1e5d3',
          paddingTop: 3,
          fontSize: 20,
        }}>
        Santo Domingo
      </Text>

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
        }}>
        <View
          style={{
            width: '50%',
            backgroundColor: '#3CACAE',
            height: 70,
            marginTop: 20,
            borderTopRightRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#FFF',
              fontSize: 17,
            }}>
            Adoptar
          </Text>
        </View>

        <View
          style={{
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#62636a',
              fontWeight: 'bold',
              fontSize: 17,
            }}>
            Detalles
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Detail;
