import React from 'react';
import { View, Text } from 'react-native';

const ReproductorMinimizado = () => {
  return (
    <View style={{
        position: 'absolute',
        bottom: 50,
        display: 'flex',
        flex: 1,
        backgroundColor: 'blue',
        
    }}>
      {/* Timeline */}
      <Text>Tiempo actual / Tiempo total</Text>
      <Text>Nombre de la canción</Text>
    </View>
  );
};

export default ReproductorMinimizado;