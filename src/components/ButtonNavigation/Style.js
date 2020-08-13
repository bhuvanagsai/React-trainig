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
    margin-left:20px;
    font-size:14px;
    cursor : pointer;
    &:focus{
        outline:none;
    }

`