import React, {type PropsWithChildren} from 'react';
import  Asteroiddetails from './src/components/Hoome/Asteroiddetails'

import Hello from './src/components/Hoome/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Hello}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Asteroiddetails" component={Asteroiddetails} />
      </Stack.Navigator>
    </NavigationContainer>
    );
};

export default App;
