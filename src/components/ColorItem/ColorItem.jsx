import React, { Component } from 'react';
import './ColorItem.css';

class ColorItem extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            starred: false,
            hex: "#" + Number(0x1000000 + parseInt(this.props.red)*0x10000 + parseInt(this.props.green)*0x100 + parseInt(this.props.blue)).toString(16).substring(1),
            offset: "0x" + parseInt(this.props.offset).toString(16)
        }
    }

    toggleStar() {
        this.setState({
            starred: !this.state.starred
        });
    }

    render() {

        let colorStyle = {
            color: this.state.hex,
        }

        let star = this.state.starred ? "★" : "☆";

        return(
            <div className="Color-item">
                <span className = {this.state.starred ? "Star-on" : "Star-off"} onClick = {this.toggleStar.bind(this)}>{star}</span>
                <span className = "Color" style = {colorStyle} >{this.state.hex}</span>
                <span className = "Offset" >{this.state.offset}</span>
            </div>
        );
    }
}

export default ColorItem;