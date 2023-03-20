import React from 'react'
import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

const Home = ({navigation}) => {
    return(
        <View style={{
            backgroundColor:"#FFF",
            flex:1
        }}>
           <View style={{
               backgroundColor:"#3CACAE",
               height:"30%",
               borderBottomLeftRadius:20,
               borderBottomRightRadius:20,
               paddingHorizontal:20
           }}>
               <Image
                    source={require('../../assets/images/1.png')}
                    style={{
                        height:10,
                        width:20,
                        marginTop:50
                    }}
               />
               <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:25,
                   width:"100%"
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontSize:28,
                            color:"#FFF",
                            fontWeight:"bold"
                        }}>Hola, Danilsa</Text>
                   </View>
                   <View style={{width:"50%",alignItems:"flex-end"}}>
                        <Image
                            source={require('../../assets/images/user.png')}
                            style={{height:60,width:60}}
                        />
                   </View>
               </View>
           </View>
           <LinearGradient
            colors={["rgba(60, 172, 174, 0.4)", "transparent"]}
            style={{
                left:0,
                right:0,
                height:90,
                marginTop:-45
            }}
           >
               <View style={{
                   backgroundColor:"#FFF",
                   paddingVertical:8,
                   paddingHorizontal:20,
                   marginHorizontal:20,
                   borderRadius:15,
                   marginTop:25,
                   flexDirection:"row",
                   alignItems:"center"
               }}>
                   <TextInput
                        placeholder="Buscar"
                        placeholderTextColor="#b1e5d3"
                        style={{
                            fontWeight:"bold",
                            fontSize:18,
                            width:260
                        }}
                   />
                   <Image
                    source={require('../../assets/images/3.png')}
                    style={{height:20,width:20}}
                   />
               </View>
            </LinearGradient>


               <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center"
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#585a61"
                        }}>Subidos Recientemente</Text>
                        <View style={{
                            height:4,
                            backgroundColor:"#b1e5d3",
                            width:190,
                            marginTop:-5
                        }}>

                        </View>

                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        
                   </View>
               </View>

            
        
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:400}}
                >
                    <LinearGradient
                        colors={["rgba(0,164,109,0.09)", "transparent"]}
                        style={{
                            position:"absolute",
                            left:0,
                            right:0,
                            height:100,
                            marginTop:220,
                            top:0
                        }}
                    />
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:"160",
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:"120"
                        }}
                    >
                        <Image
                            source={require('../../assets/images/ramon.png')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>LUCY</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#3CACAE",
                                paddingLeft:35
                            }}>Fem</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            Santiago
                        </Text>
                    </TouchableOpacity>

                    <View 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                            source={require('../../assets/images/ramon.png')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>RAMÓN</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#3CACAE",
                                paddingLeft:45
                            }}>Masc</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            Santo Domingo
                        </Text>
                    </View>

                    <View 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                            source={require('../../assets/images/ramon.png')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>BLACKY</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#3CACAE",
                                paddingLeft:35
                            }}>Masc</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            Puerto Plata
                        </Text>
                    </View>

                </ScrollView>            

                


               <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center",
                   marginTop:-80,
               }}>
                   
                   
                 
               </View>
               
        </View>
    )
}
export default Home;