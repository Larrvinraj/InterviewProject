//Import Library
import React, { Component } from 'react';

//Import navigation
import Stack from '../src/navigation/stack'

//Import Services
import NavigationService from './services/NavigationService'

export default class App extends Component {
  render() {
    return (
      <Stack ref={navigatorRef => { NavigationService.setTopLevelNavigator(navigatorRef) }} />
    )
  }
}
