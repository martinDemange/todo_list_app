import {createContext} from "react";
import data from "./data.json";

export const DataContext = createContext(data);
//export const DataContext = createContext(JSON.parse(data));