import React from 'react'
import './dock.scss'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Dock = ({windowState, setWindowState}) => {

  const openWindow = (name) => {
    setWindowState(state => ({ ...state, [name]: true }))
    
  }


  return (
    <footer className='dock'>
        <div
        onClick={() => openWindow("github")}
        className="icon github"><img src="/doc-icons/github.svg" alt="GitHub" /></div>
        <div 
        onClick={() => openWindow("note")}
        className="icon note"><img src="/doc-icons/note.svg" alt="Note" /></div>
        <div
        onClick={() => openWindow("resume")} 
        className="icon pdf"><img src="/doc-icons/pdf.svg" alt="PDF Viewer" /></div>
        <div
        onClick={() => openWindow("spotify")}
        className="icon spotify"><img src="/doc-icons/spotify.svg" alt="Spotify" /></div>
        <div
        onClick={() => {window.open("mailto:rushipatel437@gmail.com","_blank")}} 
        className="icon mail"><img src="/doc-icons/mail.svg" alt="Mail" /></div>
        <div
        onClick={() => {window.open("https://www.linkedin.com/in/rushi-patel-6a311a308/","_blank")}} 
        className="icon link"><img src="/doc-icons/link.svg" alt="Link" /></div>
        <div
        onClick={() => openWindow("cli")}
        className="icon cli"><img src="/doc-icons/cli.svg" alt="CLI" /></div>
    </footer>
  )
}

export default Dock