// Create context for storing the state of the TODO list
const TodoContext = createContext();

// Initial state
const initialState = {
  todos: []
};

// Main component that uses the provider and displays the components for working with the TODO list
const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <TodoList />
      <AddTodo />
    </TodoContext.Provider>
  );
};

export default App;
