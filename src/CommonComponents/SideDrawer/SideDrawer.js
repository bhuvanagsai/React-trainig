import React, {Component} from 'react';

import {LogoWrapper,Logo,Wrapper,Navigations,GetInTouch,SideBarNavigation} from './Style';


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
                <SideBarNavigation>
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
                    <GetInTouch>
                        <img src ={require('../../assets/Images/message-icon.png')} alt = "nav button"></img>
                        <span>Get in touch</span>
                    </GetInTouch>
                </SideBarNavigation>
                
            </Wrapper>
            
            
        
        )};

}
export default SideDrawer;