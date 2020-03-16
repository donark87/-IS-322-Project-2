import React from 'react';


import ListItem from "./ListItem";
import TaskOption from "./TaskOption";
import TaskList from "./TaskList";


class ListView extends React.Component {

   /* componentDidMount() {
        this.render();
    }

    componentDidUpdate() {
        this.render();
    }*/

    orderBy = (value, props) => {
        let ListView = this.props.tasks;

        ListView.sort(function (a, b) {
            let nameA;
            let nameB;
            if(value == "title" ) {
                nameA = a.title.toUpperCase();
                nameB = b.title.toUpperCase();
            }
            else if (value == "column"){
               nameA = a.column.toUpperCase();
                nameB = b.column.toUpperCase();
            }
            else {
               nameA = a.type.toUpperCase();
               nameB = b.type.toUpperCase();
            }

            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
        });

        this.props.onUpdateTaskList(ListView);
      //this.setState({ tasks: ListView });

    }


    render() {


        const TaskOptions = <TaskOption task={this.props.tasks} orderBy={this.orderBy}/>

        const ListItems = this.props.tasks.map(task => {
            return <ListItem task={task} key={task.id} />
        });

        return (
           <div>
            {TaskOptions}
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Status</th>
                    <th scope="col">Type</th>
                </tr>
                </thead>
                <tbody>
                 { ListItems }
                </tbody>
            </table>
           </div>
        )
    }
}
export default ListView;