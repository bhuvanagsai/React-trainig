import styled from 'styled-components';

export const NavgationContainer = styled.div`
    margin-top:30px;

`
export const NavButton = styled.button`
   color: ${(props) => (props.active ? "white" : "black")};
    background-color: ${(props) => (props.active ? "#11142f" : "#f0f3f4")};
    border: none;
    padding: 8px 15px;
    border-radius: 16px;
    font-size:14px;
    cursor : pointer;
    margin-right:10px;
    &:focus{
        outline:none;
    }

`

export const Line = styled.hr`
    border: 1px solid #f0f3f4;
    opacity: 0.5;
`