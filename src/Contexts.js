import {createContext} from "react";
import data from "./data.json";

/**
 * DataContext is a React Context that provides access to the tasks, categories, and relations data from the data.json file.
 * @type {React.Context<{tasks: {}, categories: {}, relations: {}}>}
 */
export const DataContext = createContext(data);
