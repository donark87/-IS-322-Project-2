import React from 'react';

const TaskOption = props => {

    return (
        <form>
            <div className="form-row align-items-center">
                <div className="col-auto my-1">
                    <label className="mr-sm-1" htmlFor="inlineFormCustomSelect">Sort</label>
                    <select className="custom-select mr-sm-1" id="inlineFormCustomSelect">
                        <option selected>Choose...</option>
                        <option value="1">Title</option>
                        <option value="2">Status</option>
                        <option value="3">Type</option>
                    </select>
                </div>
                <div className="col-auto my-1">
                    <label className="mr-sm-1" htmlFor="inlineFormCustomSelect">Status</label>
                    <select className="custom-select mr-sm-1" id="inlineFormCustomSelect">
                        <option selected>Choose...</option>
                        <option value="1">To Do</option>
                        <option value="2">In Progress</option>
                        <option value="3">Review</option>
                        <option value="4">Done</option>
                    </select>
                </div>
                <div className="col-auto my-1">
                    <label className="mr-sm-1" htmlFor="inlineFormCustomSelect">Type</label>
                    <select className="custom-select mr-sm-1" id="inlineFormCustomSelect">
                        <option selected>Choose...</option>
                        <option value="1">Task</option>
                        <option value="2">Feature</option>
                        <option value="3">Bug</option>

                    </select>
                </div>
             </div>
        </form>

    )

};

export default TaskOption;