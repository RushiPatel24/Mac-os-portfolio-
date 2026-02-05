import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = ({windowName, setWindowState,}) => {
  return (
    <MacWindow x={700} y={100} windowName={windowName} setWindowState={setWindowState}>
        <div className="resume-window">
            <iframe src="Rushi Patel - CV.pdf"></iframe>
        </div>
    </MacWindow>
  )
}

export default Resume