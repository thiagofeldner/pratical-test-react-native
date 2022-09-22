import { TouchableOpacity, ImageBackground, ImageSourcePropType, TouchableOpacityProps, Text } from 'react-native';

import { styles } from './styles';

export interface BookCategorieProps {
  title: string
  cover: ImageSourcePropType
}

interface Props extends TouchableOpacityProps{
  data : BookCategorieProps;
}

export function BookCategorie({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground 
        style={styles.categories}
        source={data.cover}
      />

      <Text style={styles.title}>
        {data.title}
      </Text>
    </TouchableOpacity>
  );
}