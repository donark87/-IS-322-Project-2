import React from 'react';
import axios from 'axios';

import PageTabs from './PageTabs';
import TaskList from "./TaskList";
import ListView from "./ListView";
//import Page1 from './Page1';
//import Page2 from './Page2';
//import Page3 from './Page3';

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

  onAddTask = (taskName) => {
    let tasks = this.state.tasks;
    tasks.push({
      title: taskName,
      id: this.state.tasks.length + 1,
      type: 'task',
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
           <TaskList tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList} />
        ));
      case 'page2':
        return (this.wrapPage(
          <ListView tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList}/>
        ));
      case 'page3':
        return (this.wrapPage(
          //  <Page3 />
        ));
      default:
        return (this.wrapPage(
            <h2>Invalid Tab, choose another</h2>
        ));
    }

  }
}

export default App;