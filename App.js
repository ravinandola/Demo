import { Provider } from 'react-redux';
import Router from './src/router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './src/redux';
import React from 'react';

export default function App({ navigation }) {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </Provider>
  );
}
