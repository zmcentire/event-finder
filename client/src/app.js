import React from 'react';
import Navbar from './components/navbar';
import EventContainer from './event/eventContainer';
import Form from './event/form';
import {withEvent} from './event/eventProvider';


const App = () => {
    return (
        <div>
            <Navbar/>
            <Form/>
            <EventContainer/>
        </div>
    )
}

export default withEvent(App)