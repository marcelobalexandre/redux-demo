import React, { PropTypes } from 'react'
import style from './style.css'

const Todo = (props) => {
  const className = props.completed ? style.completed : style.active

  return (
    <li onClick={props.onClick} className={className}>
      {props.text}
    </li>
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
