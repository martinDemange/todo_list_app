import logo from './logo.svg';
import './App.css';
import TodoList from "./todoList/todoList";

/**
 * Main Component of the application, it contains the header and the todo list component
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TodoList/>
        </header>
      </div>
  );
}


export default App;
