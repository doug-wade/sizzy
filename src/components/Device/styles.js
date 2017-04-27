import styled from 'styled-components';
import flex from "styles/flex";
import {deviceHeader} from 'styles/sizes';

//external
import $Icon from "react-fontawesome";

export const Device = styled.div`
  ${flex.vertical}
  margin-right: 25px;
  margin-bottom: 25px;
`;

export const Header = styled.div`
  ${flex.horizontal}
  ${flex.centerHorizontal}
  ${flex.spaceBetween}
  height: ${deviceHeader.height}px;
  width: 100%;
  margin-bottom: 15px;
`;

export const Name = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${p => p.theme.color};
`;

export const Rotate = styled($Icon)`
  ${flex.horizontal}
  ${flex.centerHorizontal}
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-color: #c1c1c1;
  color: white;
  border: 1px solid #ababab;
  font-size: 13px;
  border-radius: 4px;
`;