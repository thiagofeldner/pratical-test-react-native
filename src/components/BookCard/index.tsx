import { TouchableOpacity, TouchableOpacityProps ,ImageBackground, ImageSourcePropType, Text } from 'react-native';
import  { Ionicons }  from '@expo/vector-icons';

import { styles } from './styles';

export interface BookCardProps {

  title: string;
  author: string;
  cover: ImageSourcePropType;  
}

interface Props extends TouchableOpacityProps{
  data : BookCardProps;
}

export function BookCard({ data, ...rest }: Props ) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground 
        style={styles.cover}
        source={data.cover}
      />  
    
      <Text style={styles.title}>
        {data.title}
      </Text>
      <Text style={styles.author}>
        {data.author}
        
        {/* <Ionicons name='star' size={10} color="#673403" />
        <Ionicons name='star' size={10} color="#673403" />
        <Ionicons name='star' size={10} color="#673403" />
        <Ionicons name='star' size={10} color="#673403" />
        <Ionicons name='star' size={10} color="#673403" /> */}
      </Text>

    </TouchableOpacity>   
    
  );
}
