
import React, { Component } from "react";
class ClassCounterOne extends Component {
    // in class component first defined constructor
    constructor(props) {
        // then defined super
        super(props)
        //define the initial state
        // so constructor initialize the state value
        this.state = {
            count: 0,
            // here we have to defined name where you have applice conditional rendering
            name: ''
        }
    }
    componentDidMount() {

        document.title = `clcked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState) {
        // pass argument like previos props and previous state
        // based on state applied condition and call effect hook when condition satisfied 
        if (prevState.count !== this.state.count)
            console.log('updating the log...')
        document.title = `clicked ${this.state.count} times`
    }
    render() {
        return (
            <div>
                {/* here you have to applied coditional rendering on name */}
                <input type="text" value={this.state.name} onChange={(e) => {
                    this.setState({ name: e.target.value })
                }} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click {this.state.count} times </button>
            </div>
        )
    }
}
export default ClassCounterOne;