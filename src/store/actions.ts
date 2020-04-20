
import {
    ADD_TASK,
    REMOVE_TASK,
    TodoActionTypes,
    Task
  } from "./types";
  
  
  export function removeTask (id: number): TodoActionTypes {
    return {
      type: REMOVE_TASK,
      payload: id
    }
  }
  
  
  export function addTask (task: Task): TodoActionTypes {
    return {
      type: ADD_TASK,
      payload: task
    }
  }