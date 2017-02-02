import React from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

const View = (props) => (
  <div>
    <AddTodo {...props} />
    <TodoList {...props} />
    <Footer {...props} />
  </div>
)

export default View
