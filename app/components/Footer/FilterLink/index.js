import React, { PropTypes } from 'react'

const FilterLink = (props) => {
  if (props.filter === props.visibilityFilter) {
    return <span>{props.children}</span>
  }

  const handleOnClick = (e) => {
    e.preventDefault()

    props.onClick(props.filter)
  }

  return (
    <a href="#" onClick={handleOnClick}>
      {props.children}
    </a>
  )
}

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default FilterLink
