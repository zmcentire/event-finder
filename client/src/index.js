import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import EventProvider from './event/eventProvider'

ReactDOM.render(
                <EventProvider>
                    <App/>
                </EventProvider>, 
                document.getElementById('root'))