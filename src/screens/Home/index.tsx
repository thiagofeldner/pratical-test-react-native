import { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';


import { BookCard, BookCardProps } from '../../components/BookCard';
import { Heading } from '../../components/Heading';
import { BOOKS } from '../../utils/books';

import { styles } from './styles';

export function Home() {
  const [books, setBooks] = useState<BookCardProps[]>([]);

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/books/v3/lists/names.json\?api-key\=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR')
    .then(response => response.json())
    .then(data => setBooks(data))    
  },[]);

  return (
    <View style={styles.container}>
      <Heading />

      <FlatList 
        data={BOOKS}
        keyExtractor={item => item.title}
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