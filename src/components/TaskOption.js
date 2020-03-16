import React from 'react';
class TaskOption extends React.Component {


   constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleSort = this.handleSort.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStatus = this.handleStatus.bind(this);
        this.handleType = this.handleType.bind(this);
    }
    handleSubmit(event) {
        this.props.orderBy(event.target.value);
    }

    handleSort(event) {
        this.setState({value: event.target.value});
       this.props.orderBy(event.target.value);
   }

    handleStatus(event){

        this.setState({value: event.target.value});
        this.props.filterByStatus(event.target.value);
   }
    handleType(event){

        this.setState({value: event.target.value});
        this.props.filterByType(event.target.value);
    }



    render() {


        return (

            <form onSubmit={this.handleSubmit}>
                <div className="form-row align-items-center">
                    <div className="col-auto my-1">
                        <label className="mr-sm-1" htmlFor="inlineFormCustomSelect">Sort</label>
                        <select className="custom-select mr-sm-1" value={this.state.value} onChange={this.handleSort} name="sortBy" id="sortBy"
                                id="inlineFormCustomSelect">
                            <option selected>Choose...</option>
                            <option value="title">Title</option>
                            <option value="column">Status</option>
                            <option value="type">Type</option>
                        </select>
                    </div>
                    <div className="col-auto my-1">
                        <label className="mr-sm-1" htmlFor="inlineFormCustomSelect">Status</label>
                        <select className="custom-select mr-sm-1" value={this.state.value} onChange={this.handleStatus} id="inlineFormCustomSelect">
                            <option selected>Choose...</option>
                            <option value="todo">To Do</option>
                            <option value="in-progress">In Progress</option>
                            <option value="review">Review</option>
                            <option value="done">Done</option>
                        </select>
                    </div>
                    <div className="col-auto my-1">
                        <label className="mr-sm-1" htmlFor="inlineFormCustomSelect">Type</label>
                        <select className="custom-select mr-sm-1" value={this.state.value} onChange={this.handleType} id="inlineFormCustomSelect">
                            <option selected>Choose...</option>
                            <option value="task">Task</option>
                            <option value="feature">Feature</option>
                            <option value="bug">Bug</option>

                        </select>
                    </div>
                </div>
            </form>

        )
    }
};

export default TaskOption;