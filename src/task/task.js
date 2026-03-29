import './task.css';

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
 * @warning This function is currently not implemented.
 * @param id
 * @returns {*|string}
 * @constructor
 * @deprecated The task are now handled directly in list.js
 */
function GetTitle(id) {
}

/**
 * A function that retrieves the status of a task based on its ID from the data context.
 * @warning This function is currently not implemented.
 * @param id
 * @constructor
 * @deprecated The task are now handled directly in list.js
 */
function GetStatus(id) {
}

/**
 * A function that retrieves the description of a task based on its ID from the data context.
 * @warning This function is currently not implemented.
 * @param id
 * @constructor
 * @deprecated The task are now handled directly in list.js
 */
function GetDescription(id){
}

export default Task;