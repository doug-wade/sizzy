import {
  Error,
  StyledInput
} from "./styles";
import React, { Component } from "react";
import { isUri } from "valid-url";

class UrlInput extends Component {
  constructor(props) {
    super(props);
    this.state = {valid: true};
  }

  render () {
    const {onChange, ...rest} = this.props;
    const error = this.state.valid ? null : <Error>Please provide a valid url</Error>;
    return <span>
      <StyledInput {...rest}
        onChange={(val)=> {
            if (isUri(val.target.value)) {
              this.setState({
                valid: true
              });
            } else {
              this.setState({
                valid: false
              });
            }
            onChange(val);
        }}
      />
      {error}
    </span>;
  }
}

export default UrlInput;
