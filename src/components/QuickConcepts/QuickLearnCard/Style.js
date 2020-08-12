import styled from 'styled-components';

export const QuickLearnCardsContainer = styled.div`
    margin-top:30px;
    display:flex;
    flex-wrap:wrap;
`
export const Cards = styled.div` 
    background-color:aliceblue;
    width: 450px;
    margin-left: 20px;
    height: 250px;
    border-radius:16px;
    position:relative;
`
export const ImageContainer = styled.div`
    height:inherit;
    float:right;
    >img{
        max-height:100%;
        max-width:100%;
    }
`
export const MainContainer = styled.div`
    padding: 27px 32px;
    position: absolute;
    width: calc(100% - 62px);
    >span{
        color:#000000;
        opacity: 0.5;
        font-size:14px;
    }
    >p{
        color:#131415;
        font-size: 24px;
        font-weight: 600;
        width: 220px;
    }
`;
export const ButtonContainer = styled.div`
    font-size:14px;
    display: flex;
    justify-content: space-between;
    padding-top: 10%;
    >span{
        color:#848484;
    }
    >button{
        border-radius: 9px;
        color: #0e1721;
        font-weight: bold;
        padding: 6px 14px;
        border: none;
        background-color: #ffffff;
        cursor:pointer;
        &:focus{
            outline:none;
        }
    }
`