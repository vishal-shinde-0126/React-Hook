import { Component } from "react";
// create class component
class ClassCounter extends Component {
    // now create constructor to initialize the state variable
    constructor(props) {
        super(props);
        // initialize the initial state as default 0
        this.state = {
            count: 0
        }
    }
    //create method to increment the count
    incrementCount = (count) => {
        this.setState({
            count: this.state.count + 1
        })
    }
    // class component having reder method
    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>count {this.state.count}</button>
            </div>
        )
    }
}
export default ClassCounter;

// * there are three step to create class component
// 1.to create class component
// 2. create state variabel and initialize with 0
// 3. create method to capeble for setting this state value.