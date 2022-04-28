import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { MoviePoster } from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({ movies, title }: Props) => {
  return (
    <View style={{ height: title ? 260 : 220 }}>
      {title && (
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            marginLeft: 10,
            color: 'black',
          }}>
          {title}
        </Text>
      )}
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster movie={item} height={200} width={140} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
