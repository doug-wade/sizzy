// @flow
import ORIENTATIONS from "config/orientations";

export const getOppositeOrientation = (orientation: string) =>
  (orientation === ORIENTATIONS.PORTRAIT
    ? ORIENTATIONS.LANDSCAPE
    : ORIENTATIONS.PORTRAIT);
