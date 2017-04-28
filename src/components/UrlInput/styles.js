import styled from "styled-components";

export const StyledInput = styled.input`
  font-size: 14px;
  width: 260px;
  margin-right: 35px;
  padding: 8px 15px;
  border: none;
  border-bottom-color: #825acb;
  border-radius: 5px;
  box-shadow: inset 0 2px 5px rgba(0,0,0,.2);
  outline: none;
  font-weight: 300;

  ${p => p.theme.urlInputStyle}
`;

export const Error = styled.span`
  font-size: 14px;
  color: #f2777a;
`;
