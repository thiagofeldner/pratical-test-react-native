import { View, FlatList } from 'react-native';

import { BookCard } from '../../components/BookCard';
import { Heading } from '../../components/Heading';
import { BOOKS } from '../../utils/books';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Heading />

    <FlatList 
      data={BOOKS}
      keyExtractor={item => item.id}
      renderItem={({ item })  => (
        <BookCard 
          data={item}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentList}
    />
       
    </View>
  );
}