import React from 'react'
import FilterLink from './FilterLink/index'

const Footer = (props) => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL" visibilityFilter={props.visibilityFilter} onClick={props.onFilterLinkClick}>
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE" visibilityFilter={props.visibilityFilter} onClick={props.onFilterLinkClick}>
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED" visibilityFilter={props.visibilityFilter} onClick={props.onFilterLinkClick}>
      Completed
    </FilterLink>
  </p>
)

export default Footer
