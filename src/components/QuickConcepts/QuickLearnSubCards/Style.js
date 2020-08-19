import styled from 'styled-components';

export const SubcardsContainer = styled.div`
    margin:30px 0px;
    display:flex;
    flex-wrap:wrap;
` ;
export const Card = styled.div`
    width: 222px;
    margin-right:15px;
    color:#000000;
    font-size:12px;
    >p{
        width: 172px;
        font-size: 16px;
        font-weight: bold;
        color: #11142f;
    }
    @media only screen and (min-width: 320px) and (max-width: 991px) {
        margin-bottom:20px;
    }
`;
export const Type  = styled.span`
    margin-left:5px;
    opacity:0.3;
`