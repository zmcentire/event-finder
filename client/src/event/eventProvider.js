import React, {Component} from 'react';
import Axios from 'axios';
const eventAxios = Axios.create();
const {Consumer, Provider} = React.createContext();

class EventProvider extends Component {
    constructor(props){
        super(props);

        this.state = {
            event: []
        }
    }

    getEvent = () => {
        eventAxios.get('/api/event').then(res => {
            this.setState({
                event: res.data
            })
        })
    }

    editEvent = (id, updatedEvent) => {
        eventAxios.put('/api/event' + id, updatedEvent).then(res => {
            this.setState(prev => {
                return {
                    event: prev.event.map(book => book._id === id ? res.data : event)
                }
            })
        })
    }

    createEvent = (newEvent) => {
        eventAxios.post('/api/event', newEvent).then(res => {
            this.setState(prev => {
                return {
                    event: [...prev.event, res.data]
                }
            })
        }).catch(err => console.dir(err))
    }

    deleteEvent = id => {
        eventAxios.delete('/api/book' + id).then(res => {
            this.setState(prev => {
                return {
                    event: prev.event
                }
            })
        })
    }

    render() {
        return (
            <Provider value = {{
                ...this.state,
                getEvent: this.getEvent,
                editEvent: this.editEvent,
                createEvent: this.createEvent,
                deleteEvent: this.deleteEvent,
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default EventProvider

export function withEvent (Comp){
    return props => <Consumer>
                        {value => <Comp {...value}{...props}/>}
                    </Consumer>
}