import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import EventDashboard from './EventDashboard'
import Navbar from '../components/Partials/Navbar'

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Container className="main">
                    <EventDashboard />
                </Container>
            </div>
        )
    }
}

export default App
