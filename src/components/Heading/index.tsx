import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import perfilImg from '../../assets/perfil.png'

export function Heading() {
  return (
    <View style={styles.container}>
       <Text style={styles.foryou}>
        Olá, Ana!
      </Text>
      <Image 
        source={perfilImg}
        style={styles.perfil}
      />

      <Text style={styles.textfor}>
        Para você
      </Text>

      <Text style={styles.categories}>
        Categorias
      </Text>

      <Text style={styles.booksread}>
        Os mais lidos da semana
      </Text>      
    </View>
  );
}