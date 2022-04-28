/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';
import { CastItem } from './CastItem';
interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="star-outline" size={18} color="gray" />
          <Text style={{ marginLeft: 5, marginRight: 5 }}>
            {movieFull.vote_average}
          </Text>
          <Text>- {movieFull.genres.map(genre => genre.name).join(', ')}</Text>
        </View>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Historia
        </Text>
        <Text
          style={{
            fontSize: 18,
            marginTop: 10,
            color: 'black',
            opacity: 0.7,
          }}>
          {movieFull.overview}
        </Text>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Presupuesto
        </Text>
        <Text
          style={{
            fontSize: 18,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'gray',
          }}>
          {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
        </Text>
      </View>
      <View style={{ marginTop: 10, marginBottom: 50, marginLeft: 20 }}>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Actores
        </Text>
        <FlatList
          data={cast}
          renderItem={({ item }) => <CastItem actor={item} />}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />
        {/* <CastItem actor={cast[0]} /> */}
      </View>
    </>
  );
};
