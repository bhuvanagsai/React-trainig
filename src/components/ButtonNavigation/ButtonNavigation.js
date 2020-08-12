import React, { Component } from 'react';

import {NavgationContainer,NavButton} from './Style';

import QuickConcepts from '../QuickConcepts/quickConcepts';

class ButtonNavigation extends Component{
    state = {
        ButtonNavigationItems :[
            {
                buttonName :"Quick Concepts",
                id :0
            },
            {
                buttonName :"Articles",
                id :1
            },
            {
                buttonName :"News",
                id :2
            }
        ],
        activeState:0,
        buttonType : 'Quick Concepts'
    }
    switchHandler = (id,btnName) =>{
        this.setState({ activeState: id });
        this.setState({buttonType : btnName})
    }
    renderSwitch(param) {
        switch(param) {
          case 'Quick Concepts':
            return <QuickConcepts/>;
          case 'Articles' :
            return <div>Articles</div>;
          case "News":
            return <div>News</div>;
          default :
            return <QuickConcepts/>;
        }
      }
    render(){
        return (
            <div>
                <NavgationContainer>
                    {this.state.ButtonNavigationItems.map((p , index) =>(
                        <NavButton key = {p.id} active = {p.id === this.state.activeState}
                        onClick={() => {this.switchHandler(index,p.buttonName)}}>{p.buttonName}</NavButton>
                    ))}
                </NavgationContainer>
                {this.renderSwitch(this.state.buttonType)}
            </div>

        );

    }

}

export default ButtonNavigation;