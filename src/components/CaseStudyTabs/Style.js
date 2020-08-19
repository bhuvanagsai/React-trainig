import styled from 'styled-components';

export const Tabs = styled.ul`
    display:flex;
    margin:0;
    border-bottom:2px solid #eee;
    margin-bottom: 15px;
`
export const Tab = styled.li`
    font-size: 14px;
    font-weight: 500;
    color: #707282;
    margin-right: 30px;
    padding-bottom:10px;
    border-bottom:${(props) => (props.active ? "3px solid #3448c4" : "transparent")};
`;

export const ContainWrapper = styled.div`
    width:100%;
    display:flex;
`;