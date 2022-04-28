import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigator';
import { GradientProvider } from './src/context/GradientContext';

const AppState = ({ children }: any) => {
  return <GradientProvider>{children}</GradientProvider>;
};

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
    </NavigationContainer>
  );
};

//the movie db apikey
//76165c98ab9f82feeeb271506661e41d
//https://api.themoviedb.org/3/movie/550?api_key=76165c98ab9f82feeeb271506661e41d
