import styled from "styled-components";
import flex from "styles/flex";
import { colorTransition } from "styles/shared";
import { toolbarHeight } from "styles/sizes";

const devicesPadding = 30;

export const Home = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${p => p.theme.backgroundColor};
  transition: ${colorTransition};
`;

export const Devices = styled.div`
  ${flex.horizontal}
  ${flex.wrap}
  padding: ${devicesPadding + toolbarHeight}px ${devicesPadding}px ${devicesPadding}px ${devicesPadding}px;
`;
