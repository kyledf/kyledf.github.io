import React from 'react'
import CV from '../../assets/Kyle-Francis-Portfolio-CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='button' download>Download CV</a>
        <a href="#portfolio" className='button buttonPrimary'>View My Projects</a>
        <a href="#contact" className='button'>Contact Me</a>
    </div>
  )
}

export default CTA