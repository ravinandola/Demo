import { Provider } from 'react-redux';
import Router from './src/router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { store } from './src/redux';
import React from 'react';
import { RootSiblingParent } from 'react-native-root-siblings';
import { AppState } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, lightColors, createTheme, ThemeProvider } from '@rneui/themed';

export default function App({ navigation }) {
  const theme = createTheme({
    lightColors: {
      primary: '#6699CC',
      secondary:"pink"
    },
    darkColors: {
      primary: 'red',
    },
    mode: 'light',
  });

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <RootSiblingParent>
            <Router />
          </RootSiblingParent>
        </Provider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
