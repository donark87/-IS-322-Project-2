import React from 'react';

const ListItem = props => {

        return (

            <tr>
            <td>{props.task.title}</td>
            <td>{props.task.column}</td>
            <td>{props.task.type}</td>
            </tr>
        )

};

export default ListItem;