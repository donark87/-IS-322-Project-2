import React from 'react';
class TaskOption extends React.Component {


   constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
   handleChange(event) {
        this.setState({value: event.target.value});
       this.props.orderBy(event.target.value, this.props.tasks);
   }


    handleSubmit(event) {
        this.props.orderBy(event.target.value);
    }


    render() {


        return (

            <form onSubmit={this.handleSubmit}>
                <div className="form-row align-items-center">
                    <div className="col-auto my-1">
                        <label className="mr-sm-1" htmlFor="inlineFormCustomSelect">Sort</label>
                        <select className="custom-select mr-sm-1" value={this.state.value} onChange={this.handleChange} name="sortBy" id="sortBy"
                                id="inlineFormCustomSelect">
                            <option selected>Choose...</option>
                            <option value="title">Title</option>
                            <option value="column">Status</option>
                            <option value="type">Type</option>
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
    }
};

export default TaskOption;