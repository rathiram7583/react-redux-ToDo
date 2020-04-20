import {
    TaskState,
    TodoActionTypes,
    ADD_TASK,
    REMOVE_TASK,
  } from "./types";
  
  
  const initialState: TaskState = {
    task: [
      {
        id: 1,
        task: "Get Up Early Morning",
      },
      {
        id: 2,
        task: "Make Breakfast",
      },
      {
          id:3,
          task:"Do some Yoga",

      },
      {
          id:4,
          task:"Get Ready for the class",
      },
      {
          id:5,
          task:"Taking care of the kids",
      }
    ],
  };
  
  
  export function todoReducer(state = initialState, action: TodoActionTypes) {
    switch (action.type) {
      case REMOVE_TASK:
        return {
          ...state,
          
          task: state.task.filter((task:any) => task.id !== action.payload),
        };
  
      case ADD_TASK:
        return {
          ...state,
          
          task: [...state.task, action.payload],
        };
  
      default:
        return state;
    }
  }