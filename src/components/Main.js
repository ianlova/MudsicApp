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