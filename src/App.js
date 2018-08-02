import React, { Component } from 'react';
import MyComponent from './MyComponent';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'Appetizer Title'
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      title: 'New appetizer title'
    });
  }
  onSubmit(event) {
    event.preventDefault();
    console.log(this.random.value);
  }

  render() {
    const title = "This is my next app";
    const list = ["item 1", "item 2", "item3"]

    return (
      <div className="App">
        <h1>{title}</h1>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} ref={input => this.random = input} />
        </form>

        <h1 onClick={this.onClick}>{this.state.title}</h1>

        <div onClick={this.onClick}>Click Me</div>
        < MyComponent />

      </div>
    );
  }
}

export default App;
