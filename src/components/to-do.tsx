import React, { Component } from "react";
import { RootState } from "../store/index";
import { removeTask, addTask } from "../store/actions";
import { Task } from "../store/types";
import {  Form, Input, Button } from "semantic-ui-react";
import { connect } from "react-redux";

export interface ITodoProps {
  removeTask: typeof removeTask;
  addTask: typeof addTask;
  todo: Task[];
}

export class Todo extends Component<ITodoProps> {
  
  taskID = (): number => {
    let randomNumber: number = Math.floor(Math.random() * 100);
    randomNumber += this.props.todo.length;
    return randomNumber;
  };

  
  addTask = (event: any) => {
    event.preventDefault();
    
    const Input: HTMLInputElement | null = document.querySelector(
      '[name="todo-input"]'
    );
    let inputValue: string = "";
    if (Input !== null) inputValue = Input.value;

    
    this.props.addTask({
      id: this.taskID(),
      task: inputValue,
    });
  };

  
  removeTask = (id: number) => {
    this.props.removeTask(id);
  };
  

  render() {
    return (
        <div>
          <Form onSubmit={this.addTask}>
            <label htmlFor="todo-input">Enter New Task  </label>
              <Input name="todo-input" type="text" placeholder="Enter to do task"/>
             <Button  type="submit" >ADD</Button>
             </Form>
             <h3>To-Do Task </h3>
        
          <ul>
            {this.props.todo.map((element) => (
              <li>
                {element.task}
                <Button  onClick={(event) => this.removeTask(element.id)}>
                 X
                </Button>
              </li>  
            ))}
          </ul>
        
        </div>
    );
  }
}


const mapStateToProps = (state: RootState) => {
    return {
      todo: state.todo.task
    };
};


export default connect(mapStateToProps, {
    addTask,
    removeTask,
})(Todo)