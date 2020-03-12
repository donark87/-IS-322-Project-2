import React from 'react';

import ListItem from "./ListItem";
import TaskOption from "./TaskOption";


class ListView extends React.Component {




    render() {


        const TaskOptions = <TaskOption />

        const ListItems = this.props.tasks.map(task => {
            return <ListItem task={task} key={task.id} markDone={this.markDone}/>
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