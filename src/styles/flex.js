export const flex = {
  horizontal: `
    display: flex;
    flex-direction: row;
  `,
  vertical: `
    display: flex;
    flex-direction: column;
  `,
  flexWrap: `
    display: flex;
    flex-wrap: wrap;
  `,
  centerHorizontal: `
    justify-content: center;
    align-items: center;
  `,
  wrap: `
    flex-wrap: wrap;
  `,
  centerHorizontalH: `
    justify-content: center;
  `,
  centerHorizontalV: `
    align-items: center;
  `,
  centerVertical: `
    align-items: center;
    justify-content: center;
  `,
  centerVerticalReset:`
    align-items: initial;
    justify-content: initial;
  `,
  centerVerticalH: `
    align-items: center;
  `,
  centerVerticalV: `
    justify-content: center;
  `,
  spaceAround: `
    justify-content: space-around;
  `,
  spaceBetween: `
    justify-content: space-between;
  `,
  justifyEnd: `
    justify-content: flex-end;
  `,
  alignEnd: `
    align-items: flex-end;
  `
};

export default flex;