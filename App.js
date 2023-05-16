import { Provider } from 'react-redux';
import Router from './src/router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { store } from './src/redux';
import React from 'react';
import { RootSiblingParent } from 'react-native-root-siblings';
import { AppState } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function App({ navigation }) {

  return (
      <SafeAreaProvider>
        <Provider store={store}>
          <RootSiblingParent>
            <Router />
          </RootSiblingParent>
        </Provider>
      </SafeAreaProvider>
  );
}
