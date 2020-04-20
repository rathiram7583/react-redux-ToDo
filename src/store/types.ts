export interface Task {
    id: number
    task: string
  }
  
  
  export interface TaskState {
    task: Task[]
  }
  
  
  export const REMOVE_TASK = 'REMOVE_TASK'
  export const ADD_TASK = 'ADD_TASK'
  
  
  interface RemoveTask {
    type: typeof REMOVE_TASK
    payload: number 
  }
  
   
  interface AddTask {
    type: typeof ADD_TASK
    payload: Task 
  }
  
  
  export type TodoActionTypes = RemoveTask | AddTask;