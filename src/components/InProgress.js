import React from 'react';

const InProgress = props => {

    return (
        <div className="card" style={{width: 200, height: 200}}>
            <div className="card-body">
                <h5 className="card-title">{props.task.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">ID: {props.task.id} </h6>
                <p className="card-text">Type: {props.task.type}</p>
                <a href="#" className="card-link"> &lt; Send Back</a>
                <a href="#" className="card-link"> Request Review ></a>

            </div>
        </div>

    )
};

export default InProgress;