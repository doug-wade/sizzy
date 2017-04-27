const light = {
  name: "light",
  backgroundColor: "#f3f3f3",
  color: "#eaeaea",
  toolbarStyle: `
    background-color: #3c3c3c;
    box-shadow: 0 0 13px rgba(0, 0, 0, 0.55);
  `,
  buttonStyle: `
    border: 1px solid #b1b1b1;
    
    &:hover {
      background-color: #e8d3bf;
    }
  `,
  iframeStyle: {
    boxShadow: "1px 1px 5px 0px #d0d0d0",
    border: "1px solid #d8d8d8"
  }
};

export default light;
