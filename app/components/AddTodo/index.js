import React from 'react'

const AddTodo = (props) => {
  let input

  const handleAddTodo = (e) => {
    e.preventDefault()

    props.handleAddTodo(input)
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input ref={node => { input = node }} />

        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodo
