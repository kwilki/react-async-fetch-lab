// create your App component here
import React, {Component} from 'react'

export default class App extends Component {

    state = {
        peopleInSpace: []
    }

    render() {
        return (
            <div>
                <h1>Number of people in space: {this.state.number}</h1>
                {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(({people, number}) => this.setState({peopleInSpace: people, number: number}, () => console.log(this.state)))
            // OR
            //.then((json) => this.setState({peopleInSpace: json.people, number: json.number}, () => console.log(this.state)))
    }
}