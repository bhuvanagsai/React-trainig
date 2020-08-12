import React ,{Component} from 'react';

import QuickLearnCard from './QuickLearnCard/quickLearnCard';

import SubCards from './QuickLearnSubCards/subCards';

class QuickConcepts extends Component{
    state = {
        QuickLearnData : [
            {
                id:0,
                LearnType : "Quick Learn",
                title : "Machine learning vs Deep learning",
                timing: 5,
            },
            {
                id:1,
                LearnType : "Quick Learn",
                title : "Machine learning vs Deep learning",
                timing: 5,
            }
        ],
        SubCardsData :[
            {
                image  : require("../../assets/Images/bitmap.png"),
                title : "How business needs to change to be AI ready?",
                timing : 6,
                type : "Business Insider"
            },
            {
                image  : require("../../assets/Images/bitmap-1.png"),
                title : "Is neuralink actually gonna save world?",
                timing : 6,
                type : "Medium"
            },
            {
                image  : require("../../assets/Images/bitmap-2.png"),
                title : "A primer on Artificial Intelligence (AI)",
                timing : 6,
                type : "Hackernoon"
            },
            {
                image  : require("../../assets/Images/bitmap-3.png"),
                title : "Machine learning vs Deep learning",
                timing : 6,
                type : "Medium"
            }
        ]
    }
    render(){
        return(
            <div>
                <QuickLearnCard data = {this.state.QuickLearnData}></QuickLearnCard>
                <SubCards data = {this.state.SubCardsData}></SubCards>
            </div>
           
        );

    }
}

export default QuickConcepts;