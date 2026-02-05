import React from 'react'
import "./cli.scss"
import Terminal from 'react-console-emulator'
import MacWindow from './MacWindow'

const Cli = ({windowName, setWindowState}) => {
    const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • experience - See my career history
  • contact   - Get in touch

Happy exploring! 🚀
`;

    return (
        <MacWindow x={750} y={300} windowName={windowName} setWindowState={setWindowState}>
            <div className="cli-window">
                <Terminal
                    commands={{
                        echo: {
                            description: 'Echo a passed string.',
                            usage: 'echo <string>',
                            fn: (...args) => args.join(' ')
                        },

                        about: {
                            description: 'Learn about Rushi Patel.',
                            usage: 'about',
                            fn: () => `Hi! I'm Rushi Patel, a full-stack web developer passionate about 
building beautiful and functional user interfaces. I specialize in React, 
Node.js, and modern web technologies. Let's build something amazing together!`
                        },
                       projects: {
  description: 'View recent projects.',
  usage: 'projects',
  fn: () => `Recent Projects:
  1. macOS Portfolio
     - macOS-inspired personal portfolio with desktop UI,
       draggable windows, dock navigation, and terminal sections
     - Built using React, HTML, SCSS, JavaScript

  2. Rock Paper Scissors Game
     - Interactive game built with React and Tailwind CSS
     - Responsive UI with computer-based gameplay logic

  3. ToDo Application
     - Task management app with create, update, delete features
     - Uses local storage for data persistence
     - Built with React and Tailwind CSS

  4. UrbanClap Clone
     - On-demand service marketplace clone
     - Connects users with local service professionals
     - Built using HTML, CSS, JavaScript, and Java`
},

skills: {
  description: 'Display technical skills.',
  usage: 'skills',
  fn: () => `Technical Skills:
  Frontend:HTML5, CSS3, JavaScript, React.js, Angular, Tailwind CSS, Bootstrap
  Backend (Basic): Node.js, Express.js, MongoDB
  Programming Languages: Python, C++, C, Java
  Tools: Git, GitHub`
},

experience: {
  description: 'Display work experience',
  usage: 'experience',
  fn: () => `Work Experience:

Frontend Developer @ Saawahi IT Solution LLP (Oct 2025 - Dec 2025)
  - Worked on live production projects fixing bugs
  - Improved UI functionality and user experience
  - Enhanced website responsiveness
  - Used Git for version control and collaboration

Web Developer @ Plasmid, Bengaluru (Aug 2024 - Oct 2024)
  - Developed modern user interfaces using HTML, CSS, JavaScript
  - Built responsive layouts with cross-browser compatibility
  - Focused on clean UI and performance`
},

contact: {
  description: 'Get contact information.',
  usage: 'contact',
  fn: () => `Contact Information:
  Name:        Rushi Patel
  Email:       rushipatel437@gmail.com
  Phone:       +91 8780817371
  Location:    India
  LinkedIn:    linkedin.com/in/rushi-patel-6a311a308
  Status:      Open to Opportunities`
},

                        resume: {
                            description: 'Download my resume.',
                            usage: 'resume',
                            fn: () => `Resume: Opening Rushi_Patel_Resume.pdf...
📄 Download started! Check your downloads folder.`
                        },
                        github: {
                            description: 'Visit my GitHub profile.',
                            usage: 'github',
                            fn: () => `Opening GitHub profile: https://github.com/RushiPatel24
🔗 Redirecting to GitHub...`
                        },
                        social: {
                            description: 'View social media links',
                            usage: 'social',
                            fn: () => `LinkedIn: 'https://www.linkedin.com/in/rushi-patel-6a311a308/'
`
                        },
                    }}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'rushipatel:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                    messageStyle = {{padding:'0.1rem'}}
                />
            </div>
        </MacWindow>
    )
}

export default Cli