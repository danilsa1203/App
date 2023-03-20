import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native'

export default ProductsList = ({navigation}) => {
    
  const products = [
    {
      id: 1,
      name: 'Purina Dog Chow 55lb',
      price: '$2,500',
      images:[
        'https://d1cft8rz0k7w99.cloudfront.net/n/0/9/6/1/0961c9c3d5c887ee53b19e475223fd0a3aa44958_DdogFood_398389_02.jpg',
        
      ]
    },
    {
      id: 2,
      name: 'Juguete para gato',
      price: '$850',
      images:[
        'https://gatogazzu.org/wp-content/uploads/2022/03/poste-rascador-para-gatos.jpg',
        
      ]
    },
    {
      id: 3,
      name: 'Spray anti-pulgas',
      price: '$300',
      images:[
        'https://static.wixstatic.com/media/2110d9_3be0ada9d8784ae9849f60ec5da056b6~mv2.png/v1/fill/w_1200,h_1200,al_c/2110d9_3be0ada9d8784ae9849f60ec5da056b6~mv2.png',
        
      ]
    },
  ]

  const handlePress = () => {}

  return (
    
    <FlatList
      data={products}
      renderItem={({ item:product }) => (
        <View style={styles.card} onPress={handlePress}>
          <View style={styles.cardContent}>
            <ScrollView horizontal style={styles.imagesContent}>
            {product.images.map((image, index) => (
              <TouchableOpacity onPress={() => {}} key={`${product.id}_${index}`}>
                <Image style={styles.productImage} source={{ uri: image }} />
              </TouchableOpacity>
            ))}
            </ScrollView>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>
          <View style={styles.cardActions}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Añadir al carrito</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Más detalles</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Favoritos</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      keyExtractor={item => item.id.toString()}
    />
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#B0C4DE',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  cardContent: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    margin: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  button: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
})