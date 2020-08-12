import React, {Component} from 'react';

import {LogoWrapper,Logo,Wrapper,Navigations} from './Style';


class SideDrawer extends Component{
    render(){
        return(
            <Wrapper>
                <LogoWrapper>
                    <Logo>
                    <img src ={require('../../assets/Images/group-6.png')} alt = "nav button"></img>
                    </Logo>
                    SBG.ai
                </LogoWrapper>
                <Navigations>
                    <li>
                        <button><img src ={require('../../assets/Images/group-2.png')} alt = "nav button"></img></button>
                    </li>
                    <li>
                        <button><img src ={require('../../assets/Images/group-copy.png')} alt = "nav button"></img></button>
                    </li>
                    <li>
                        <button><img src ={require('../../assets/Images/group-copy-2.png')} alt = "nav button"></img></button>
                    </li>
                    
                </Navigations>
            </Wrapper>
            
            
        
        )};

}
export default SideDrawer;