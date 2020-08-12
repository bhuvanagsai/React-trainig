import React, {Component} from 'react';

import {HeaderNavigation,HeaderContainer,ProfileIcon,NavLink} from './Style';


class Header extends Component{
    state = {
        navItems : [
            {
                link:"My Dashboard",
                id:0
            },
            {
                link: "Explore AI",
                id :1
            }
        ],
        activeheader: 0
    }
    switchNavHandler = (id) =>{
        this.setState({ activeheader: id });
    }
    render(){
        return(
            <HeaderContainer>
                <HeaderNavigation>
                {this.state.navItems.map((i,index) => (
                    <NavLink key = {i.id} activeheader = {i.id === this.state.activeheader}
                    onClick={() => {this.switchNavHandler(index)}}
                    >{i.link}</NavLink>
                ))}
                </HeaderNavigation>
                <ProfileIcon>
                    <img src = {require('../../assets/Images/oval.png')} alt  = "Profile icon"/>
                </ProfileIcon>
            </HeaderContainer>
        )};

}
export default Header;