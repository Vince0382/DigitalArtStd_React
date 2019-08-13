import React from 'react';

const textSVG = (props) => {
    const svgColor = props.svgColor? props.svgColor : "gray";
    const id = props.children.replace(/\s+/g, '');
    return (
        <svg style={{whiteSpace: "preserve-spaces", overflow: "visible"}}>
            <defs>
                <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor={svgColor}/>
                    <stop offset="1" stopColor="#ffffff"/>
                </linearGradient>
            </defs>
            
            <text className={props.className} x="0" y="100%" fillOpacity="0.15" textAnchor="start" fontWeight="900" fontSize={props.fontSize} fill={"url(#" + id + ")"}>{props.children}</text>
        </svg>
    );
}

export default textSVG;