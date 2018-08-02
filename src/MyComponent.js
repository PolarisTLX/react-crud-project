import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired
};

const defaultProps = {
  name: 'Default name of App'
}

class MyComponent extends Component {
  componentWillMount() {
    //AJAX requests
    console.log('Component is about to mount')
  }
  componentDidMount() {
    //focus field after component loads
    console.log('Component mounted')
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(this.props)
    console.log(nextProps)
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(this.props)
    console.log(prevProps)
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   //return true;
  //   //return false;
  // }
  render() {
    const {title, name, onClick} = this.props;
    return (
      <div className="component">
        <h1>Title: {title}</h1>
        <h2>Name: {name}</h2>
        <div onClick={onClick}>Click me</div>
      </div>
    );
  }
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;
