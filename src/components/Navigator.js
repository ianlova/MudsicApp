import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MoodsScreen from '../screens/MoodsScreen';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name = "Home" component={ HomeScreen}/>
            <Tab.Screen name = "Favorites" component={FavoritesScreen} />
            <Tab.Screen name = "Moods" component={MoodsScreen} />
            <Tab.Screen name = "Profile" component={ ProfileScreen} />
        </Tab.Navigator>
    )
}