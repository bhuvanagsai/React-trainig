import styled from 'styled-components';

export const Wrapper = styled.div`
    width:15%;
    background-color:#f1f4ff;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Logo = styled.div`
    font-size:30px;
    color:blue;
    margin-right: 15px;
`;
export const LogoWrapper = styled.div`
    display:flex;
    font-size: 20px;
    font-weight: 600;
    color: darkblue;
    padding-top: 5px;

`;
export const Navigations = styled.ul`
    >li button{
        border:none;
        background-color:transparent;
        cursor:pointer;
        padding: 10px;
        &:focus{
            outline:none;
        }
    }
    >li button i{
        color: blue;
    }
`