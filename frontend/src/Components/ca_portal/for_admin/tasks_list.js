import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import faxios from '../../../axios'


export default class users_list extends Component {
    state = {
        tasks: []
    }

    componentDidMount() {
        faxios().get('/portal/tasks/').then(d => {
            this.setState({
                tasks: d.data.sort((a,b)=>b.id-a.id)
            })
        })
    }


    _createTask = () => {
        this.props.history.push('/caportal/admin/create_task/')
    }


    render() {
        const tasks_html = this.state.tasks.map((task, i) =>
            <tr key={i}>
                <td>{i + 1}</td>
                <td><Link className='detail_link' to={`/caportal/admin/tasks/${task.id}/`}>{task.name}</Link></td>
                <td>{task.platform}</td>
                <td>{task.madeby}</td>
            </tr>
        )

        return (
            <div className='tasks_list container'>
                <div className="d-flex my-4">
                    <h2 className=" flex-grow-1 text-center">Tasks List</h2>
                    <div className="text-right">
                        <button onClick={this._createTask} className="btn btn-primary">create task <i className="fa fa-plus ml-2"></i> </button>
                    </div>
                </div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Task name</th>
                            <th>Platform</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks_html}
                    </tbody>
                </table>
            </div>
        )
    }
}
