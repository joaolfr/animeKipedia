import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {StatusBar} from 'react-native';
import {dark} from './themes';
import {SafeAreaView} from 'react-native';
import Router from './routers';

const Root = () => {
  return (
    <>
      {/* the below code is used to avoid top and bottom white areas in safe area view */}
      <SafeAreaView style={{flex: 0, backgroundColor: '#303030'}} />
      <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
        <ThemeProvider theme={dark}>
          <StatusBar barStyle="light-content" backgroundColor="#1c1a1a" />
          <Router />
        </ThemeProvider>
      </SafeAreaView>
    </>
  );
};

export default Root;
