import React, { Component } from 'react';
import MyComponent from './MyComponent';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'Appetizer Title',
      name: 'Appetizer Name',
      mainTitle: 'Main Title',
      checked: true,
      shouldRenderTitle: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateCheck = this.updateCheck.bind(this);
  }

  onClick() {
    this.setState({
      title: 'New appetizer title',
      name: 'New appetizer name'
    });
  }
  handleClick() {
    this.setState({
      mainTitle: 'Changed by clicking'
    });
  }
  onSubmit(event) {
    event.preventDefault();
    console.log(this.random.value);
  }
  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }
  updateCheck() {
    this.setState({
      checked: !this.state.checked
    });
  }

  renderTitle() {
    if (!this.state.shouldRenderTitle) {return null;}
    return <h1>Another Title</h1>
  }

  render() {
    const title = "This is my next app";
    const list = ["item 1", "item 2", "item3"]

    return (
      <div className="App">
        {
          this.state.shouldRenderTitle
          ? <h1>Another Title</h1>
          : null
        }
        <h1>{this.state.mainTitle}</h1>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} ref={input => this.random = input} />
        </form>

        <h1 onClick={this.onClick}>{this.state.title}</h1>

        <div onClick={this.handleClick}>Click Me</div>
        < MyComponent
          title={this.state.title}
          name={this.state.name}
          onClick={this.onClick}
        />
        <input
          value={this.state.name}
          onChange={this.updateName}
        />
        <input
          type="checkbox"
          onChange={this.updateCheck}
          checked={this.state.checked}
        />
      </div>
    );
  }
}

export default App;
