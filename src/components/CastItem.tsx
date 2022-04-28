import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

export const CastItem = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && <Image source={{ uri }} style={styles.image} />}
      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>
          {actor.name}
        </Text>
        <Text style={{ fontSize: 16 }}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 10,
    borderRadius: 10,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: 'white',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
});
