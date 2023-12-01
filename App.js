import * as React from 'react';
import Router from './src/navigation/Router';
import { NavigationContainer } from '@react-navigation/native';
import {Home} from './src/pages';
export default function App() {
  return (
    //  <Home />
    <NavigationContainer>
     <Router/>
    </NavigationContainer>
  )
}

