import React, { Component } from 'react';
import ColorItem from '../../components/ColorItem';
import './ColorTable.css';

class ColorTable extends Component {

    render() {
        let colors=[];
        let data = this.props.data;
        for(let i = 0; i < data.length; i++) {
            if(data[i]===255) colors.push(<ColorItem key={i+"#"+data[i-3]+data[i-2]+data[i-1]} red={data[i-3]} green={data[i-2]} blue={data[i-1]} offset={i-3} />);
        }

        return (
            <div className = "Color-table">
                {colors}
            </div>
        );
    }
}

export default ColorTable;