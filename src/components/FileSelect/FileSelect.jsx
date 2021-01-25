import React from 'react';
import './FileSelect.css';

function FileSelect(props) {

    const load = (file) => {
        let reader = new FileReader();
        reader.onload = (evt) => {
            let array = new Uint8Array(evt.target.result);
            props.onChange(array);
        };
        if(file) reader.readAsArrayBuffer(file);
    }

    return (
        <div className="File-Select">
            <input type="file" onChange={(e) => load(e.target.files[e.target.files.length-1])}/>
        </div>
    );
}

export default FileSelect;