import React ,{Component} from 'react';

import FeaturedPage from '../pages/featured';

import Header from '../CommonComponents/Header/Header';

import ViewCaseStudy from '../pages/viewCaseStudy';

import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";

class Routing extends Component {
    render() {
      return (
        <React.Fragment>
            <Header/>
            <Router>
                <Switch> 
                    <Route path="/" exact component = {FeaturedPage}/>
                    <Route path="/ViewCaseStudy" exact component = {ViewCaseStudy}/>
                </Switch>
            </Router>   
        </React.Fragment>
      )
    }
}

export default Routing;