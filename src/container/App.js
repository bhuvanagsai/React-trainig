import React, { Component } from 'react';

import 'font-awesome/css/font-awesome.min.css';

import {AppWrapper,AppContainer,MainContainer} from './Style'

import Routing from '../Routers/Routing';

import SideDrawer from '../CommonComponents/SideDrawer/SideDrawer';

class App extends Component {
  render(){
    return (
      <AppWrapper>
        <AppContainer>
        <SideDrawer/>
            <MainContainer>
              <Routing/>
            </MainContainer>
        </AppContainer>
      </AppWrapper>
      
    );
  }
}

export default App;
