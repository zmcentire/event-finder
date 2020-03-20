import React, {Component} from 'react';
import {withEvent} from './eventProvider';

class Form extends Component {
    constructor(){
        super()

        this.state = {
            name: "",
            description: "",
            date: ""
        }
    }

    componentDidMount(){
        if(this.props.type === 'update'){
            let {name, description, date} = this.props.event
            this.setState({name, description, date})
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        if(this.props.type === 'add'){
            this.props.createEvent(this.state)
        } else {
            this.props.editEvent(this.props.event._id, this.state)
        }
    }

    render(){
        return(
            <form onSubmit = {this.handleSubmit} className={this.props.type === 'add' ? 'event-submit' : 'edit-event'}>
                <input type="text" placeholder="Event Name" name="name" value={this.state.name}
                onchange={this.handleChange}/>
                <input type="text" placeholder="Description" name="description" value={this.state.description}
                onchange={this.handleChange}/>
                <input type="date" name="date" value={this.state.date}
                onChange={this.handleChange}/>
            </form>
        )
    }
}

export default withEvent(Form)