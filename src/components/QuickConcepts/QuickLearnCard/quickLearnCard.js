import React from 'react';

import {QuickLearnCardsContainer,Cards,ImageContainer,MainContainer,ButtonContainer} from './Style'

const QuickLearnCard = (props) =>{
    return(
        <QuickLearnCardsContainer>
            {props.data.map((p,index) => (
                <Cards key  = {p.id}>
                    <ImageContainer>
                        <img src = {require('../../../assets/Images/group-3.svg')} alt = "wuick learn card"/>
                    </ImageContainer>
                    <MainContainer>
                        <span>{p.LearnType}</span>
                        <p>{p.title}</p>
                        <ButtonContainer>
                            <span>{p.timing} min course</span>
                            <button>Explore</button>
                        </ButtonContainer>
                    </MainContainer>
                </Cards>
            ))}
        </QuickLearnCardsContainer>
    );
}
export default QuickLearnCard;