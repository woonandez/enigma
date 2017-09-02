import React, { Component } from 'react';

// import components
import InputName from './Components/InputName';
import InputMessage from './Components/InputMessage';
import DatePicker from './Components/DatePicker';




class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      message: '',
      date: ''
    }
  }

  render() {
    return (
      <div style={{width: '350px'}}>
        <InputName
          name={this.state.name}
        />
        <InputMessage
          message={this.state.message}
        />
        <DatePicker />
      </div>
    );
  }
}

export default App;

