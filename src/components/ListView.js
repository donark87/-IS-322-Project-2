import React from 'react';


import ListItem from "./ListItem";
import ListViewFilter from "./ListViewFilter";


class ListView extends React.Component {

    sortBy = (value, props) => {
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
    filterByStatus = (values, props) => {
        let ListView = this.props.tasks;
       ListView = ListView.filter(function (a) {
            if(a.column == values )
                return true;
            else return false;

        })
       this.props.onUpdateTaskList(ListView);
    }

    filterByType = (values, props) => {
        let ListView = this.props.tasks;
        ListView = ListView.filter(function (a) {
            if(a.type == values )
                return true;
            else return false;

        })
        this.props.onUpdateTaskList(ListView);
    }

    render() {

        const ListViewFilters = <ListViewFilter task={this.props.tasks} sortBy={this.sortBy}  filterByStatus={this.filterByStatus} filterByType={this.filterByType}/>

        const ListItems = this.props.tasks.map(task => {
            return <ListItem task={task} key={task.id} />
        });

        return (
           <div>
            {ListViewFilters}
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