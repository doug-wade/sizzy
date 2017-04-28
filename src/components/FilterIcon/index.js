import React, { Component } from "react";

//styled-components
import { FilterIcon } from "./styles";

class FilterIconComponent extends Component {
  render() {
    const { toggle, title, icon, toggleFilterfn, filters } = this.props;

    return (
      <FilterIcon
        title={title}
        onClick={() => toggleFilterfn(toggle)}
        name={icon}
        selected={filters.indexOf(toggle) !== -1}
      />
    );
  }
}

export default FilterIconComponent;
