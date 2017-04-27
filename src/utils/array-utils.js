import filter from "lodash/filter";

export const toggleInArray = (array, item) => {
  const containsItem = array.indexOf(item) !== -1;

  return containsItem
    ? filter(array, arrayItem => arrayItem !== item)
    : [...array, item];
};
