import React from 'react'
import Constants from 'expo-constants'
import { StyleSheet, Text, View, Alert, TouchableNativeFeedback, Image } from 'react-native'

const Item = ({img, nombreItem, descItem}) => {
    console.log(img)
    return (
        <View style={{
            margin: 5
        }}>
            { <Image
                source={{uri: img}} 
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
                }}>{nombreItem}</Text>
                <Text style={{
                    fontSize: 12,
                    color: 'white'
                }}>{descItem}</Text>
            </View>
            
        </View>
    )

} 
export default Item
