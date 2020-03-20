import React from 'react';
import Form from './form';
import {withEvent} from './eventProvider';

class Event extends React.Component {
    constructor() {
        super();
        this.state = {
            toggled: true
        }
    }

    toggle = () => {
        this.state(prev => {
            return {
                toggled: !prev.toggled
            }
        })
    }

    render() {
        const {name, description, date} = this.props.info
        return (
            <div>
                {this.state.toggled ? 
                <div className = 'event'>
                    <h1>{name}</h1>
                    <h2>{description}</h2>
                    <h3>{date}</h3>
                    <button onClick={this.toggle}>Edit</button>
                </div>
                :
                <Form button = "Save Changes" type="update" event={this.props.info}
                toggle={this.props.info}/>
                }
            </div>
        )
    }
}

export default withEvent(Event)