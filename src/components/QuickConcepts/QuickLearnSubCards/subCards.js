import React from 'react';

import {SubcardsContainer,Card,Type} from './Style';

const SubCards = (props) =>{
    return(
        <SubcardsContainer>
            {props.data.map((p,index)=>(
                <Card key = {p.id}>
                    <img src = {require(`../../../assets/Images/${p.image}.png`)} alt  = "card images"/>
                    <p>{p.title}</p>
                    <span>{p.timing} min read</span>
                    <Type>{p.type}</Type>
                </Card>
            ))}
        </SubcardsContainer>
    );
}
export default SubCards;