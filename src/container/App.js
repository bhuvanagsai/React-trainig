import React, { Component } from 'react';

import Header from '../CommonComponents/Header/Header';

import 'font-awesome/css/font-awesome.min.css';

import styled from 'styled-components';

import SideDrawer from '../CommonComponents/SideDrawer/SideDrawer';

import FeaturedPage from '../pages/Featured';


const AppWrapper = styled.div`
  margin: auto;
  max-width: 1280px;
`;
const AppContainer = styled.div`
  display:flex;
`;
const MainContainer = styled.div`
    width:85%;
    margin-left:30px;
`;

class App extends Component {
  render(){
    return (
      <AppWrapper>
        <AppContainer>
          <SideDrawer/>
          <MainContainer>
            <Header/>
            <FeaturedPage/>
          </MainContainer>
        </AppContainer>
        
      </AppWrapper>
      
    );
  }
}

export default App;
