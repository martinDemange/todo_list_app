import './list.css';
import '../task/task.css'
import {DataContext} from "../Contexts.js";
import {useContext} from "react";

/**
 * A simple List component that displays a list of items.
 * @returns {JSX.Element}
 * @constructor
 */
function List() {
    return (
        <div className="list">
            <h1>TASK</h1>
            <GetData/>
            Categories:
            <GetCategory/>
        </div>
    );
}

/**
 * A component that fetches data from a JSON file and displays it in a list.
 * @returns {JSX.Element}
 * @constructor
 */
function GetData() {
  let data = useContext(DataContext);

  return (
    <ul className="taskList">
      {data.tasks.map(task =>(
        <li key={task.id} className="task">
          <h2>{task.title}</h2>
          <h3>Description</h3>
          <p className="taskDesc">{task.description}</p>
          <p>Creation : {task.date_creation}</p>
          <p>Echeance : {task.date_echeance}</p>
          <p>Etat : {task.etat}</p>
        </li>
      ))}
    </ul>
    )
}

/**
 * A component that fetches categories from `data.jon` file and displays them in a list.
 * @returns {JSX.Element}
 * @constructor
 */
function GetCategory() {
  let data = useContext(DataContext);
  return (
    <ul>
      {data.categories.map(category => (
        <li key={category.id}>{category.id}: {category.title} — {category.color}</li>
      ))}
    </ul>
  )
}

export default List;