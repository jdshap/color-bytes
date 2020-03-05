import React, { Component } from 'react';
import './App.css';
import ColorTable from './components/ColorTable';
import FileSelect from './components/FileSelect/FileSelect';

class App extends Component {

  constructor(props) {
    super(props);
    this.colorTable = React.createRef(this);

    this.state = {
      bytes: []
    }
  }

  fileUpdate = (data) => {
    this.setState({
      bytes: data
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Color Bytes</h1>
        </div>
        <FileSelect parentCallback = {this.fileUpdate} />
        <ColorTable ref = {this.colorTable} data = {this.state.bytes} />
      </div>
    );
  }
}

export default App;