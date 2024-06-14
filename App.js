import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Routes from './src/Navigations/Routes';
import store from './src/redux/store';
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </Provider>

  );
}


