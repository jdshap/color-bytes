import React from 'react';
import ColorItem from '../../components/ColorItem';
import './ColorTable.css';

function ColorTable(props) {
    let colors = [];

    const calculateRedmean = (r1, g1, b1, r2, g2, b2) => {
        let avgR = (r1 + r2) / 2;
        let delta = Math.sqrt( (2 + avgR / 256) * (r2 - r1) + 4 * (g2 - g1) + (2 + (255 - avgR) / 256) * (b2 - b1) );
        return delta;
    }

    for(let i = 0; i < props.data.length-3; i++) {
        if(Math.abs(calculateRedmean(props.filter.r, props.filter.g, props.filter.b, props.data[i], props.data[i+1], props.data[i-+2])) < 10) colors.push(
            <ColorItem key={i} red={props.data[i]} green={props.data[i+1]} blue={props.data[i-+2]} offset={i}/>
        );
    }

    return (
        <div className = "Color-table">
            {colors}
        </div>
    );
}

export default ColorTable;