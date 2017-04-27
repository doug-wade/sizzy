import React, { Component } from "react";

//styled-components
import { FilterIcon } from "./styles";

class FilterIconComponent extends Component {
  render() {
    const { toggle, icon, toggleFilterfn, filters } = this.props;

    return (
      <FilterIcon
        onClick={() => toggleFilterfn(toggle)}
        name={icon}
        selected={filters.indexOf(toggle) !== -1}
      />
    );
  }
}

export default FilterIconComponent;
