import React, {useState} from "react";

import "./styles.css"

export default function BorderRadius() {
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);
    const [right, setRigth] = useState(0);
    const [bottom, setBottom] = useState(0);
    const [width, setWidth] = useState(0);

    const createBorder = () => `${right}% ${left}% ${top}% ${bottom}%`;
    const createBorderWidth = () => `${width}px`;

    return (
        <div className="page">
            <div className="page-content">
                <h1 className="page-title"> Border Radius Generator </h1>
                <div className="form-group">
                    <div>
                        <label htmlFor="size">Radius Top Left</label>
                        <input id="size" className="input" type="range" min="0" max="100" value={right}
                               onChange={event => setRigth(Number(event.target.value))}/>
                    </div>
                    <div>
                        <label htmlFor="size">Radius Top Right</label>
                        <input id="size" className="input" type="range" min="0" max="100" value={left}
                               onChange={event => setLeft(Number(event.target.value))}/>
                    </div>
                </div>

                <div className="form-group">
                    <div>
                        <label htmlFor="size">Radius Bottom Right</label>
                        <input id="size" className="input" type="range" min="0" max="100" value={top}
                               onChange={event => setTop(Number(event.target.value))}/>
                    </div>
                    <div>
                        <label htmlFor="size">Radius Bottom Left</label>
                        <input id="size" className="input" type="range" min="0" max="100" value={bottom}
                               onChange={event => setBottom(Number(event.target.value))}/>
                    </div>
                </div>

                <label htmlFor="width">Width</label>
                <input id="width" className="input" type="range" min="0" max="100" value={width}
                       onChange={event => setWidth(Number(event.target.value))}/>
                <div data-box-title="Result" className="content">
                    <div className="result" style={{borderRadius: createBorder(), borderWidth: `${width}px`}}>

                    </div>
                </div>

                border-radius: {createBorder()};
                <br/>
                border-width: {createBorderWidth()};
            </div>
        </div>
    )
}
