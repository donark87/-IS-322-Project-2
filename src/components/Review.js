import React from 'react';

const Review = props => {

    return (
        <div className="card" style={{width: 200, height: 250}}>
            <div className="card-body">
                <h5 className="card-title">{props.task.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">ID: {props.task.id} </h6>
                <p className="card-text">Type: {props.task.type}</p>
                <a href="#" onClick={() => props.markDown(props.task)} className="card-link"> &lt; More Work Required</a><br/>
                <a href="#" onClick={() => props.markUp(props.task)} className="card-link"> Mark Done ></a>

            </div>
        </div>

    )
};

export default Review;