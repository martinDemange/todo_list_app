import './task.css';
import {DataContext} from "../Contexts.js";
import {useContext} from "react";

/**
 * A simple Task component that displays a task with its title and status.
 * @param id
 * @returns {JSX.Element}
 * @constructor
 * @deprecated The task are now handled directly in list.js
 */
function Task(id){
  return (
    <div className="task">
      <GetTitle id={id}/>
      <GetDescription id={id}/>
      <GetStatus id={id}/>
    </div>
  )
}

/**
 * A function that retrieves the title of a task based on its ID from the data context.
 * @param id
 * @returns {*|string}
 * @constructor
 */
function GetTitle(id) {
  let data = useContext(DataContext);
  console.log(data.tasks.find((element) => element.id === id))
  return (<h2>REACT</h2>)
}

/**
 * A function that retrieves the status of a task based on its ID from the data context.
 * @param id
 * @constructor
 */
function GetStatus(id) {

}

function GetDescription(id){

}

export default Task;