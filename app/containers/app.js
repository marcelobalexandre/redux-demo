import { connect } from 'react-redux'
import { addTodo, toggleTodo } from '../actions/todos'
import { setVisibilityFilter } from '../actions/visibilityFilter'
import View from '../components/index'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleAddTodo: (input) => {
      if (!input.value.trim()) {
        return
      }

      dispatch(addTodo(input.value))
      input.value = ''
    },
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
    onFilterLinkClick: (filter) => {
      dispatch(setVisibilityFilter(filter))
    }
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(View)

export default App
