import styled from "styled-components";
import flex from "styles/flex";
import { deviceHeader } from "styles/sizes";
import { colorTransition } from "styles/shared";
import { rotateIconOnOrientationChange } from "utils/sc-utils";

const sizes = {
  button: {
    size: 25,
    iconSize: 15
  }
};

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
  font-size: ${p => p.small ? 12 : 15}px;
  font-weight: 400;
  color: ${p => p.theme.color};
  text-align: center;
  flex: 1;
`;

export const Buttons = styled.div`
  ${flex.horizontal}
  ${flex.centerHorizontalV}
  flex: 1;
`;

export const Button = styled.div`
  ${flex.horizontal}
  ${flex.centerHorizontal}
  cursor: pointer;
  width: ${sizes.button.size}px;
  height: ${sizes.button.size}px;
  background-color: #c1c1c1;
  border: 1px solid #ababab;
  border-radius: 4px;
  
  &:first-child {
    margin-right: 5px;
  }
  
  &:hover {
    background-color: gray;
  }
`;

export const Size = styled.div`
  ${flex.horizontal}
  ${flex.justifyEnd}
  font-size: 11px;
  color: white;
  flex: 1;
`;

export const RotateIcon = styled($Icon)`
  transition: ${colorTransition};
  ${rotateIconOnOrientationChange};
  color: white;
  font-size: ${sizes.button.iconSize}px !important;
`;
