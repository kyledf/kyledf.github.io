import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='button' download>Download CV</a>
        <a href="#contact" className='button buttonPrimary'>Contact Me</a>
    </div>
  )
}

export default CTA