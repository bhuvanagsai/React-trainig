import React, { Component } from 'react';

import 'font-awesome/css/font-awesome.min.css';

import { ThemeProvider } from 'styled-components';

import theme from '../Theme/theme';

import {AppWrapper,AppContainer,MainContainer} from './Style'


import Routing from '../Routers/Routing';

import SideDrawer from '../CommonComponents/SideDrawer/SideDrawer';

class App extends Component {
  render(){
    return (
      <AppWrapper>
        <ThemeProvider theme = {theme}>
          <AppContainer>
          <SideDrawer/>
              <MainContainer>
                <Routing/>
              </MainContainer>
          </AppContainer>
        </ThemeProvider>
      </AppWrapper>
      
    );
  }
}

export default App;
