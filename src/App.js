import React, { Component } from "react";
import Overview from "./components/overview";
import uniqid from "uniqid";

const ADD_MODE = 'Add';
const UPDATE_MODE = 'Update';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: "",
        id: uniqid(),
      },
      tasks: [],
      mode: ADD_MODE,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitTask = this.onSubmitTask.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    const newTasks = this.state.mode === UPDATE_MODE
      ? this.state.tasks.map((task) =>
          task.id === this.state.task.id ? this.state.task : task
        )
      : this.state.tasks.concat(this.state.task);
    this.setState({
      //tasks:  this.state.tasks.concat(this.state.task),
      tasks: newTasks,
      task: {
        text: "",
        id: uniqid(),
      },
      mode: ADD_MODE,
    });
  };

  handleRemove = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id),
    });
  };

  handleEdit = (id) => {
    const task = this.state.tasks.find((x) => x.id === id);
    this.setState({
      task: {
        text: task.text,
        id: task.id,
      },
      mode: UPDATE_MODE,
    });
  };

  render() {
    const { task, tasks, mode } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">
            Enter Task:
            <input
              type="text"
              id="taskInput"
              value={task.text}
              onChange={this.handleChange}
            ></input>
          </label>
          <button type="submit">{mode} Task</button>
        </form>
        <Overview tasks={tasks} handleRemove={this.handleRemove} handleEdit = {this.handleEdit} />
      </div>
    );
  }
}

export default App;

/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
