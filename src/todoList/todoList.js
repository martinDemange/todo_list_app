//import '../App.css';
import './todoList.css';
import List from "../list/list.js";

function TodoList() {
    return (
    <div className="todoList">
        <Header/>
        <List/>
        <Footer/>
    </div>
  );
}

function Header() {
  return (
    <div>
        <h1>Todo List</h1>
    </div>
  );
}

function Footer() {
    return(
        <div>
            <p>© 2025 My Todo List App</p>
        </div>
    )
}

export default TodoList;