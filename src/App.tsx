import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import 'react-native-gesture-handler';
import AppStack from './presentation/navigator/Navigator';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import theme from './config/theme/theme.json'
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
  return (
    <>
        <Provider store={store}>
          <NavigationContainer>
            <IconRegistry icons = {EvaIconsPack}/>
            <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
                <AppStack />
            </ApplicationProvider>
          </NavigationContainer>
        </Provider>
    </>
  );
};

export default App;
