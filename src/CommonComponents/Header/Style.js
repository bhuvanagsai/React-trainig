import styled from 'styled-components';

export const HeaderNavigation = styled.ul`
    display:flex;
`;

export  const NavLink = styled.li`
    color:${props => props.theme.fontColor.primaryColor};
    opacity:${(props) => (props.activeheader ? 1 : 0.4)};
    font-weight: ${props => props.theme.fontWeight.w600};
    font-size: ${props => props.theme.fontSize.secondary};
    margin-right:10px;
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