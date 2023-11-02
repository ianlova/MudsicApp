import {View, Text} from 'react-native';
import React from 'react';
import Row from '../components/Row'
import SpotifyRecommendations from '../data/spotifyApi'

const HomeScreen = ({ navigation }) => {
    let data = SpotifyRecommendations()
    console.log(data)
    return (
        <View>
            <Row navigation={navigation} tituloSeccion="Canciones" data={data} />
            <Text>{}</Text>
        </View>
    );
};


export default HomeScreen;