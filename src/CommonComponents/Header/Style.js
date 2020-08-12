import styled from 'styled-components';

export const HeaderNavigation = styled.ul`
    display:flex;
`;

export  const NavLink = styled.li`
    color:#11142f;
    padding-left:30px;
    opacity:${(props) => (props.activeheader ? 1 : 0.4)};
    font-weight: 600;
    
    /* >a{
        color:"#11142f";
        
    } */
`
export const ProfileIcon = styled.div`
    width:40px;
    height:40px;
`
export const HeaderContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`