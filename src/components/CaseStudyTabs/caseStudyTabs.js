import React from 'react';

import {Tabs,Tab,ContainWrapper} from './Style';

import  TabContent from '../TabContent/tabContent';

import YouMayLikeCard from '../YouMayLikeCard/youMayLikeCard';

import Loader from '../../CommonComponents/Loader/Loader';

const CaseStudyTabs =(props) =>{
        return(
            <div>
                <Tabs>
                    {props.caseStudyTab.map((p,index) =>(
                        <Tab key = {p.id} onClick = {() => {props.buttonTabHandler(index)}}
                        active = {p.id === props.buttonState}><a href = {'#'+p.buttonName}>{p.buttonName}</a></Tab>
                    ))}
                </Tabs>
                {props.tabLoading === true ? <Loader/> :
                    <ContainWrapper>
                        <TabContent tabsContent = {props.tabData}/>
                        <YouMayLikeCard cardData = {props.youMayLike}/>
                    </ContainWrapper>
                }
            </div>
        )
}

export default CaseStudyTabs;