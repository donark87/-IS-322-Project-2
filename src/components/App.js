import React from 'react';
import axios from 'axios';

import PageTabs from './PageTabs';
import GridView from "./GridView";
import ListView from "./ListView";
import AddTask from "./AddTask"


class App extends React.Component {
  state = {
    view: 'page1',
    tasks: [],
    errorMessage: ''
  }

  componentDidMount() {
    this.getData();

  }

  getData() {
    axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/posts')
        .then(response => {
          this.setState({ tasks: response.data });
        }).catch(error => {
      this.setState({ errorMessage: error.message });
    });
  }

  onAddTask = (taskName,taskValue) => {
    let tasks = this.state.tasks;
    tasks.push({
      id: this.state.tasks.length + 1,
      title: taskName,
      type: taskValue,
      column: 'todo'
    });

    this.setState({ tasks });
  }

  onUpdateTaskList = (newTaskList) => {
    this.setState({ tasks: newTaskList });
  }

  onViewChange(view) {
    this.setState({ view });
  }

  wrapPage(jsx) {
    const { view } = this.state;
    return (
        <div className="container">
          <PageTabs currentView={view}
                    onViewChange={this.onViewChange.bind(this)}/>
          {jsx}
        </div>
    );
  }

  render() {
    const { view } = this.state;

    switch (view) {
      case 'page1':
        return (this.wrapPage(
           <GridView tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList} />
        ));
      case 'page2':
        return (this.wrapPage(
          <ListView tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList}/>
        ));
      case 'page3':
        return (this.wrapPage(
           <AddTask tasks={this.state.tasks} onSubmit={this.onAddTask}/>
        ));
      default:
        return (this.wrapPage(
            <h2>Invalid Tab, choose another</h2>
        ));
    }

  }
}

export default App;