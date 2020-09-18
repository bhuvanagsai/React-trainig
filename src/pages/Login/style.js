import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 80vh;
  text-align: center;
  margin-top: 12%;
`;
export const ErrorMessage = styled.p`
  color: red;
  font-size: 13px;
  font-family: open sans, helveticaneue;
`;
export const InputContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  box-shadow: 5px 5px 20px #e1e1e1;
  padding: 20px;
`;
export const Input = styled.input`
  width: 100%;
  height: 38px;
  background: #f6f6f6;
  border: ${(props) => (props.valid ? "none" : "1px solid red")};
  text-align: center;
  margin-bottom: 10px;
  border-radius: 8px;
  &:focus {
    border: none;
    outline: none;
  }
`;

export const Button = styled.button`
  width: 125px;
  padding: 10px;
  background-color: #53bbf2;
  border: none;
  border-radius: 8px;
  margin-right: 8px;
  cursor:pointer;
  color: ${(props) => props.theme.colors.white};
  &:focus {
    border: none;
    outline: none;
  }
`;
export const Container = styled.div`
  text-align: center;
  height: 50vh;
  margin: 16% auto;
`;
