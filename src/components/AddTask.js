import React from 'react';


class AddTask extends React.Component {
    state = { newTask: '' }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.newTask,this.state.newTaskValue);
       this.setState({ newTask: '', newTaskValue : ''})
    }


    render() {

        return(

            <div>
                <h2>Add Task</h2>
                <form className="form-group" onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="Title">Title</label>
                        <input type="text" className="form-control" id="Title" value={this.state.newTask}  onChange={(e) => this.setState({ newTask: e.target.value })}/>
                        <label htmlFor="inputState">Type</label>
                        <select id="inputState" className="form-control" value={this.state.newTaskValue} onChange={(e) => this.setState({ newTaskValue: e.target.value })}>
                            <option selected>Choose...</option>
                            <option value="Task">Task</option>
                            <option value="Feature">Feature</option>
                            <option value="Bug">Bug</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Add Task</button>

                </form>
            </div>
            )
    }
}
export default AddTask;