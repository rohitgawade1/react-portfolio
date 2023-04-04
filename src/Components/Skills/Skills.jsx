import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className='skills-container' id='Skills'>
        <div className="e-heading">
            <span className='a-span'>Skills</span>
            <hr />
        </div>
        <div className="skills">
            <span className='skill-card'>HTML</span>
            <span className='skill-card'>CSS</span>
            <span className='skill-card'>Javascript</span>
            <span className='skill-card'>ReactJs</span>
            <span className='skill-card'>Redux</span>
            <span className='skill-card'>Git GitHub</span>
            <span className='skill-card'>Java</span>
            <span className='skill-card'>Bootstrap</span>
        </div>
    </div>
  )
}

export default Skills