import React from 'react'
import { Rnd } from 'react-rnd'
import './macWindow.scss'
import { useState } from 'react'

let topZIndex = 10

const MacWindow = ({
     children,
     width = "48vw",
     height = "48vh",
     x = 200,
     y = 100,
     windowName,
     setWindowState }) => {

    const [zIndex, setZIndex] = useState(1)

    const bringToFront = () => {
        topZIndex += 1
        setZIndex(topZIndex)
    }
    

    return (
        <Rnd
            default={{
                width: width,
                height: height,
                x: x,
                y: y
            }}
            style={{ zIndex }}
            onMouseDown={bringToFront}
            onTouchStart={bringToFront}
        >
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div onClick={() => setWindowState((state) => ({ ...state, [windowName]: false }))} className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <div className="title"><p>rushipatel - zsh</p></div>
                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindow