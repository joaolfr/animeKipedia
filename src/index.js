import 'react-native-gesture-handler';
import React from 'react'
import {ThemeProvider} from 'styled-components';
import {StatusBar} from 'react-native';
import {dark} from './themes'
import {SafeAreaView} from 'react-native'
import Router from './routers';


const Root = () => {

    return(
        
        <SafeAreaView style={{flex:1}}>
            <ThemeProvider theme={dark}>
                <StatusBar barStyle="light-content" />
                <Router />
            </ThemeProvider>
        </SafeAreaView>
    )
}

export default Root