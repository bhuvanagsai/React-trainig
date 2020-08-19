import React  from 'react';

import AboutTab from './About';

import ScopeAndOutcomeTab from './scopeAndOutcome';

import Loader from '../../CommonComponents/Loader/Loader';


const TabContent = (props) =>{   
        return (
            <div className = "ContentWrapper">
                    {Object.keys(props.tabsContent).length > 0 ?
                        <div>
                            <AboutTab data = {props.tabsContent['aboutData']}/>
                            <ScopeAndOutcomeTab data = {props.tabsContent['scopeOutcomeData']}/>
                        </div> : 
                        <Loader/>
                    }
            </div>
            
        );
}
export default TabContent;