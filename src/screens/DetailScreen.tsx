import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { RootStackParam } from '../navigation/Navigator';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;

interface Props extends StackScreenProps<RootStackParam, 'DetailScreen'> {}

export const DetailScreen = ({ route }: Props) => {
  const navigation = useNavigation();
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isLoading, movieFull, cast } = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={{ uri }} style={styles.posterImage} />
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      {isLoading ? (
        <View style={styles.marginContainer}>
          <ActivityIndicator size={35} color="blue" />
        </View>
      ) : (
        <View style={{ marginTop: 20 }}>
          <MovieDetails movieFull={movieFull!} cast={cast} />
        </View>
      )}
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" color="white" size={50} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    overflow: 'hidden',
    width: '100%',
    height: screenHeight * 0.7,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  backButton: {
    position: 'absolute',
    color: 'white',
    top: 30,
    left: 20,
  },
});
