import styled from 'styled-components';

export const CarouselContainer = styled.div`
    width:90%;
    display:flex;
    margin-top:30px;
`

export const ContentContainer = styled.div`
    width:70%;
    display: flex;
    width: 75%;
    flex-direction: column;
    align-items: flex-start;
    justify-content:center;
    padding-left:30px;
    >span{
        color:#000000;
        opacity:0.5;
        font-size: 14px;
        font-weight: 500;
    }
    >p{
        width:452px;
        color: #1e1737;
        font-size: 40px;
        font-weight: 600;
        text-align:initial;
        margin:15px 0px;
    }
    
`
export const ButtonNavigation = styled.div`

    display: flex;
    align-items: center;
    >img{
        width: 30px !important;
        height: 30px;
        margin-top: 6px;
    }
    a{
        color: #3448c4;
        font-size: 14px;
        font-weight: bold;
    }
`

export const ImageContainer = styled.div`
    width:30%;
    
`