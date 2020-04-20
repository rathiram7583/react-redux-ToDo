import React from 'react';
import './App.css';
import { Grid } from "semantic-ui-react";
import Todo from "./components/to-do";


function App() {
  return (
    <Grid centered>
      <Grid.Row>
        <h1> TodoTask</h1>
      </Grid.Row>

      <Grid.Row>
        <Todo/>
      </Grid.Row>

    </Grid>
  );
}

export default App;
