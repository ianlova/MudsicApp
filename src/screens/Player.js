import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PlayerControls from './PlayerControls'; // Crea este componente

const Reproductor = () => {
  return (
    <View>
      <Text>Estás escuchando</Text>
      <Text>Nombre de la lista de reproducción</Text>
      <Image source={require('ruta-a-la-imagen.jpg')} style={{ width: 200, height: 200 }} />
      <Text>Nombre de la canción</Text>
      <Text>Artista</Text>
      <PlayerControls />
    </View>
  );
};

export default Reproductor;
