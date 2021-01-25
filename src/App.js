import React, { useState } from 'react';
import './App.css';
import ColorTable from './components/ColorTable';
import FileSelect from './components/FileSelect/FileSelect';

import { DebouncedPicker, hexToRgba } from "./components/thirdparty/DebouncedPicker";

function App() {
  const [bytes, setBytes] = useState([]);
  const [color, setColor] = useState("#ffffff");
  const [epsilon, setEpsilon] = useState(0);

  return (
    <div className="App">
      <div className="App-header">
        <h1>Color Bytes</h1>
      </div>
      <FileSelect onChange={setBytes} />
      <DebouncedPicker value={color} onChange={setColor} />
      <ColorTable data={bytes} filter={hexToRgba(color)}/>
    </div>
  );
}

export default App;