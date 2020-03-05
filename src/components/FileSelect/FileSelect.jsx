import React, { Component } from 'react';

class FileSelect extends Component {

    load = (file) => {
        let reader = new FileReader();
        reader.onload = (evt) => {
            let array = new Uint8Array(evt.target.result);
            this.props.parentCallback(array);
        };
        if(file) reader.readAsArrayBuffer(file);
    }

    render() {
        return (
            <div>
                <input type="file" onChange={(e) => this.load(e.target.files[e.target.files.length-1])}/>
            </div>
        );
    }
}

export default FileSelect;