import React, {Component} from 'react';
import {withEvent} from './eventProvider';
import Event from './event';

class EventContainer extends Component {
    componentDidMount(){
        this.props.getEvent()
    }

    render() {
        const mappedEvent = this.props.event.map(event => <Event info = {event}/>)

        return(
            <div>
                {mappedEvent}
            </div>
        )
    }
}

export default withEvent(EventContainer)