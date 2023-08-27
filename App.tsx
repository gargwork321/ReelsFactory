/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';

import ScratchPad from './src/screens/ScratchPad';

function App(): JSX.Element {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}>
      <ScratchPad />
    </SafeAreaView>
  );
}

export default App;
