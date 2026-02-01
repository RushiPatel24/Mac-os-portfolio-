import React from 'react'
import './dock.scss'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Dock = ({windowState, setWindowState}) => {
  return (
    <footer className='dock'>
        <div
        onClick={() => setWindowState(state => ({...state, github: true}))}
        className="icon github"><img src="/doc-icons/github.svg" alt="GitHub" /></div>
        <div 
        onClick={() => setWindowState(state => ({...state, note: true}))}
        className="icon note"><img src="/doc-icons/note.svg" alt="Note" /></div>
        <div
        onClick={() => setWindowState(state => ({...state, resume: true}))} 
        className="icon pdf"><img src="/doc-icons/pdf.svg" alt="PDF Viewer" /></div>
        <div
        onClick={() => {window.open("https://calendar.google.com/","_blank")}} 
        className="icon calendar"><img src="/doc-icons/calender.svg" alt="Calendar" /></div>
        <div
        onClick={() => setWindowState(state => ({...state, spotify: true}))}
        className="icon spotify"><img src="/doc-icons/spotify.svg" alt="Spotify" /></div>
        <div
        onClick={() => {window.open("mailto:rushipatel437@gmail.com","_blank")}} 
        className="icon mail"><img src="/doc-icons/mail.svg" alt="Mail" /></div>
        <div
        onClick={() => {window.open("https://www.linkedin.com/in/rushi-patel-6a311a308/","_blank")}} 
        className="icon link"><img src="/doc-icons/link.svg" alt="Link" /></div>
        <div
        onClick={() => setWindowState(state => ({...state, cli: true}))}
        className="icon cli"><img src="/doc-icons/cli.svg" alt="CLI" /></div>
    </footer>
  )
}

export default Dock