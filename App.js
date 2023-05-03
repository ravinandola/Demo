import { Provider } from 'react-redux';
import Router from './src/router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './src/redux';

export default function App() {
  return (
    <Provider store={store}>
    <SafeAreaProvider>
      <Router />
    </SafeAreaProvider>
    </Provider>
  );
}
