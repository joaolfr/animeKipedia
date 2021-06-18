import 'react-native-gesture-handler';
import React from 'react'
import {ThemeProvider} from 'styled-components';
import {StatusBar} from 'react-native';
import {dark} from './themes'
import {SafeAreaView, Text} from 'react-native'
import Router from './routers';


const Root = () => {

    return(
        <ThemeProvider theme={dark}>
            <StatusBar barStyle="light-content" />
            <Router />
        </ThemeProvider>
    )
}

export default Root