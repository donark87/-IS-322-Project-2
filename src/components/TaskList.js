import React from 'react';

import ListView from "./ListView";
import Todo from "./ToDo";
import InProgress from "./InProgress";
import Review from "./Review";
import Done from "./Done";


class TaskList extends React.Component {

  /*  componentDidMount() {
        this.render();
    }

    componentDidUpdate() {
        this.render();
    }*/
    markUp = (task) => {

        let taskList = this.props.tasks;
        for (var i = 0; i < taskList.length; i++) {
            if (taskList[i].id == task.id) {
                if(taskList[i].column == 'todo')
                taskList[i].column = 'in-progress';
                else if (taskList[i].column == 'in-progress')
                    taskList[i].column = 'review';
                else if (taskList[i].column == 'review')
                    taskList[i].column = 'done';
                break;
            }
        }
        //taskList.splice(taskIndex,1);
       this.props.onUpdateTaskList(taskList);
        //this.setState({ tasks: taskList });

    }
    markDown = (task) => {

        let taskList = this.props.tasks;
        for (var i = 0; i < taskList.length; i++) {
            if (taskList[i].id == task.id) {
                if(taskList[i].column == 'done')
                    taskList[i].column = 'review';
                else if (taskList[i].column == 'review')
                    taskList[i].column = 'in-progress';
                else if (taskList[i].column == 'in-progress')
                    taskList[i].column = 'todo';
                break;
            }
        }
        //taskList.splice(taskIndex,1);
        //this.props.onUpdateTaskList(taskList);
        this.setState({ tasks: taskList });
    }


    render() {
        const ToDoList = this.props.tasks.filter(task => task.column === 'todo').map(task => {
            return <Todo task={task} key={task.id}  markUp={this.markUp} markDown={this.markDown}/>
        });

        const InProgressList = this.props.tasks.filter(task => task.column === 'in-progress').map(task => {
            return <InProgress task={task} key={task.id}  markUp={this.markUp} markDown={this.markDown}/>
        });

        const ReviewList = this.props.tasks.filter(task => task.column === 'review').map(task => {
            return <Review task={task} key={task.id}  markUp={this.markUp} markDown={this.markDown}/>
        });
        const DoneList = this.props.tasks.filter(task => task.column === 'done').map(task => {
            return <Done task={task} key={task.id}  markUp={this.markUp} markDown={this.markDown}/>
        });

        return (
            <div>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item list-group-item-secondary"><h3>To Do</h3> <ul className="list-group"> <li>{ ToDoList }</li></ul> </li>

                <li className="list-group-item list-group-item"><h3>In Progress</h3> <ul className="list-group"> <li>{ InProgressList }</li></ul> </li>
                <li className="list-group-item list-group-item-secondary"><h3>Review</h3> <ul className="list-group"> <li>{ ReviewList }</li></ul> </li>
                <li className="list-group-item list-group-item"><h3>Done</h3> <ul className="list-group"> <li>{ DoneList }</li></ul> </li>



            </ul>
            </div>
        )
    }
}

export default TaskList;