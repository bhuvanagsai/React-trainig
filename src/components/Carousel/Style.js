import styled from 'styled-components';

export const CarouselContainer = styled.div`
    width:90%;
    display:flex;
    @media only screen and (min-width: 320px) and (max-width: 1024px) {
        padding-bottom:30px;
    }
`

export const ContentContainer = styled.div`
    width:70%;
    display: flex;
    width: 75%;
    flex-direction: column;
    align-items: flex-start;
    justify-content:center;
    >span{
        color:#000000;
        opacity:0.5;
        font-size: 14px;
        font-weight: 500;
    }
    >p{
        width:88%;
        color: #1e1737;
        font-size: 40px;
        font-weight: 600;
        text-align:initial;
        margin:20px 0px;
    }
    
`
export const ButtonNavigation = styled.a`
    border:none;
    background:none;
    display: flex;
    align-items: center;
    color: #3448c4;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    &:focus{
        outline:none;
    }
`

export const ImageContainer = styled.div`
    width:320px;
    
`;
export const ArrowImage = styled.img`
    width: 30px !important;
    height: 30px;
    margin-top: 6px;
`

export const TeamAndDate = styled.div`
    opacity: 0.5;
    color: #3f4274;
    font-style: italic;
    line-height: 1.14;
    font-size: 14px;
    font-weight: 300;


`