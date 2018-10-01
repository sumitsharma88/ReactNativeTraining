import React from 'react';
import Index from './app/index';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build({
    // $primaryColor: '#2d4150',
    // $primaryColorDark: '#041b28',
    // $primaryColorLight: '#586c7c',
    // $primaryColortext: '#FFFFFF',

    $primaryColor: '#1f667e',
    $primaryColorDark: '#154555',
    $primaryColorLight: '#5494ad',
    $primaryColortext: '#FFFFFF',

    $fontSize: '0.8rem',

});

export default class App extends React.Component {
    render() {
        return (
            <Index />
        );
    }
}