import React from 'react';
import './ColorItem.css';

function ColorItem(props) {

    let hex = "#" + Number(0x1000000 + parseInt(props.red)*0x10000 + parseInt(props.green)*0x100 + parseInt(props.blue)).toString(16).substring(1);
    let offset= "0x" + parseInt(props.offset).toString(16);

    let colorStyle = {
        color: hex
    }

    let key = props.offset;

    return(
        <div className="Color-item">
            <span className = "Color" style = {colorStyle} >{hex}</span>
            <span className = "Offset" >{offset}</span>
        </div>
    );
}

export default ColorItem;