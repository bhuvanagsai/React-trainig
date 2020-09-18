import styled from "styled-components";

export const Wrapper = styled.div`
  width: 15%;
  background-color: #f1f4ff;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow: hidden;
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`;
export const Logo = styled.div`
  font-size: ${(props) => props.theme.fontSize.h2};
  color: blue;
  margin-right: 15px;
`;
export const LogoWrapper = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.fontSize.h5};
  font-weight: ${(props) => props.theme.fontWeight.w600};
  color: darkblue;
  padding-top: 10px;
  height: 10%;
  justify-content: center;
`;
export const Navigations = styled.ul`
  > li button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 10px;
    &:focus {
      outline: none;
    }
  }
  > li button i {
    color: blue;
  }
`;
export const GetInTouch = styled.div`
  display: flex;
  align-items: center;
`;

export const SideBarNavigation = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 88%;
  justify-content: space-between;
`;
