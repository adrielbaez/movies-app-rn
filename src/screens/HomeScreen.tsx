import React, { useContext, useEffect } from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackgound } from '../components/GradientBackgound';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';
const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
  const { nowPlaying, populars, upcoming, topRated, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  const { setMainColors } = useContext(GradientContext);
  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);

    setMainColors({ primary, secondary });
  };
  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={styles.spinner}>
        <ActivityIndicator color="blue" size={45} />
      </View>
    );
  }
  return (
    <GradientBackgound>
      <ScrollView>
        <View style={{ marginTop: top + 20 }}>
          {/* carrusel main */}
          <View style={{ height: 440 }}>
            <Carousel
              data={nowPlaying}
              renderItem={({ item }) => <MoviePoster movie={item} />}
              itemWidth={300}
              sliderWidth={windowWidth}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
          {/* popular movies */}
          <HorizontalSlider movies={populars} title="Popular" />
          <HorizontalSlider movies={upcoming} title="Upcomming" />
          <HorizontalSlider movies={topRated} title="Top Rated" />
        </View>
      </ScrollView>
    </GradientBackgound>
  );
};
const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
