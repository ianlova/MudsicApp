import React from 'react'
import Constants from 'expo-constants'
import Item from './Item'
import Row from './Row'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PlayerMnimized from './playerMinimized'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import { StyleSheet, Text, View, Image, Alert, TouchableNativeFeedback, FlatList, TouchableNativeFeedbackBase, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { BottomTab } from './Navigator';

const placeholderData = [1, 2, 3, 4, 5, 6, 7, 8];

const Main = () => {
    return(
        <NavigationContainer>
            <View overScrollMode='never'
            style={{            
                alignItems: 'start', // Para centrar horizontalmente
                justifyContent: 'start', // Para centrar verticalmente
                flexGrow: 1,      
                color: '#e45d6f',
                height: '95%',
                backgroundColor: 'Blue'
            }}>
                <View style={{
                    marginTop: Constants.statusBarHeight,
                    backgroundColor: 'blue',
                    width: '100%',
                    height: '10%'
                }}></View>
                <View overScrollMode='never' style={{
                    width: '100%',
                    height: '75%'
                }}>       
                    <ScrollView vertical={true} overScrollMode='never'
                    style={{
                        paddingHorizontal: 15,
                    }}>
                        <View>
                            <Text
                                    style={{                    
                                        fontSize: 22,
                                        backgroundColor: 'black',
                                        color: 'white',
                                        marginTop: 20, 
                                        paddingLeft: 10,
                                        borderRadius: 3,
                                        textTransform: 'capitalize'                        
                                    }}
                                    >Canciones</Text>
                            <FlatList overScrollMode='never'
                                data={placeholderData}
                                horizontal={true}
                                renderItem={({ item }) => (
                                    <View>
                                        <View style={{
                                                margin: 5
                                            }}>
                                            { <Image
                                                source={require("../imgs/800px-Clics-modernos-charly-garcia-front.jpg")} 
                                                style={{
                                                    width: 120,
                                                    height: 120
                                                }}
                                            /> }
                                            <View style={{                
                                                alignItems: 'center',                
                                                backgroundColor: 'gray'
                                            }}>
                                                <Text style={{
                                                    fontSize: 16,
                                                    color: 'white'
                                                }}>Clics Modernos</Text>
                                                <Text style={{
                                                    fontSize: 12,
                                                    color: 'white'
                                                }}>Charly Garcia</Text>
                                            </View>    
                                        </View>
                                        
                                    </View>
                                    
                                )}
                            />
                        </View>
                        <View>
                            <Text
                                    style={{                    
                                        fontSize: 22,
                                        backgroundColor: 'black',
                                        color: 'white',
                                        marginTop: 20, 
                                        paddingLeft: 10,
                                        borderRadius: 3,
                                        textTransform: 'capitalize'                        
                                    }}
                                    >Canciones</Text>
                            <FlatList overScrollMode='never'
                                data={placeholderData}
                                horizontal={true}
                                renderItem={({ item }) => (
                                    <View>
                                        <View style={{
                                                margin: 5
                                            }}>
                                            { <Image
                                                source={require("../imgs/800px-Clics-modernos-charly-garcia-front.jpg")} 
                                                style={{
                                                    width: 120,
                                                    height: 120
                                                }}
                                            /> }
                                            <View style={{                
                                                alignItems: 'center',                
                                                backgroundColor: 'gray'
                                            }}>
                                                <Text style={{
                                                    fontSize: 16,
                                                    color: 'white'
                                                }}>Clics Modernos</Text>
                                                <Text style={{
                                                    fontSize: 12,
                                                    color: 'white'
                                                }}>Charly Garcia</Text>
                                            </View>    
                                        </View>
                                        
                                    </View>
                                    
                                )}
                            />
                        </View>
                        <View>
                            <Text
                                    style={{                    
                                        fontSize: 22,
                                        backgroundColor: 'black',
                                        color: 'white',
                                        marginTop: 20, 
                                        paddingLeft: 10,
                                        borderRadius: 3,
                                        textTransform: 'capitalize'                        
                                    }}
                                    >Canciones</Text>
                            <FlatList overScrollMode='never'
                                data={placeholderData}
                                horizontal={true}
                                renderItem={({ item }) => (
                                    <View>
                                        <View style={{
                                                margin: 5
                                            }}>
                                            { <Image
                                                source={require("../imgs/800px-Clics-modernos-charly-garcia-front.jpg")} 
                                                style={{
                                                    width: 120,
                                                    height: 120
                                                }}
                                            /> }
                                            <View style={{                
                                                alignItems: 'center',                
                                                backgroundColor: 'gray'
                                            }}>
                                                <Text style={{
                                                    fontSize: 16,
                                                    color: 'white'
                                                }}>Clics Modernos</Text>
                                                <Text style={{
                                                    fontSize: 12,
                                                    color: 'white'
                                                }}>Charly Garcia</Text>
                                            </View>    
                                        </View>
                                        
                                    </View>
                                    
                                )}
                            />
                        </View>
                        <View>
                            <Text
                                    style={{                    
                                        fontSize: 22,
                                        backgroundColor: 'black',
                                        color: 'white',
                                        marginTop: 20, 
                                        paddingLeft: 10,
                                        borderRadius: 3,
                                        textTransform: 'capitalize'                        
                                    }}
                                    >Canciones</Text>
                            <FlatList overScrollMode='never'
                                data={placeholderData}
                                horizontal={true}
                                renderItem={({ item }) => (
                                    <View>
                                        <View style={{
                                                margin: 5
                                            }}>
                                            { <Image
                                                source={require("../imgs/800px-Clics-modernos-charly-garcia-front.jpg")} 
                                                style={{
                                                    width: 120,
                                                    height: 120
                                                }}
                                            /> }
                                            <View style={{                
                                                alignItems: 'center',                
                                                backgroundColor: 'gray'
                                            }}>
                                                <Text style={{
                                                    fontSize: 16,
                                                    color: 'white'
                                                }}>Clics Modernos</Text>
                                                <Text style={{
                                                    fontSize: 12,
                                                    color: 'white'
                                                }}>Charly Garcia</Text>
                                            </View>    
                                        </View>
                                        
                                    </View>
                                    
                                )}
                            />
                        </View>
                    </ScrollView>
                                        
                </View>                
                <View style={{
                    height: '100%',
                    backgroundColor: 'red',
                    flexDirection: 'row',
                }}>
                    <Image
                        source={require("../imgs/800px-Clics-modernos-charly-garcia-front.jpg")} 
                        style={{
                            height: 70,
                            width: 70, 
                            padding: 20,
                        }}
                    />
                    <View>
                        <View style={{                
                            alignItems: 'start',
                            paddingHorizontal: 5,                
                            backgroundColor: 'gray',
                            marginTop: 18
                        }}>
                            <Text style={{
                                fontSize: 12,
                                color: 'white'
                            }}>Clics Modernos</Text>
                            <Text style={{
                                fontSize: 9,
                                color: 'white'
                            }}>Charly Garcia</Text>
                        </View> 
                        {/* //Acá va el icono de reaccion
                        //aca van los botones del reproductor */}
                    </View>
                </View>
            </View>
            <BottomTab style={{
                flex: 1,
                justifyContent: 'flex-end',
                height: '5%',
                backgroundColor: 'black',

            }}/>   
        </NavigationContainer>
    )
} 
export default Main

const styles = StyleSheet.create({
    container: {
        
    },
    title: {
        textTransform: 'uppercase', // Mayúsculas
        fontSize: 16, // Tamaño de fuente
        backgroundColor: 'gray', // Fondo de color
        color: 'white', // Color de fuente
        paddingHorizontal: 4,
        marginTop: 15, // Espaciado interior        
    },
});