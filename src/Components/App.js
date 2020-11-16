import React, { useEffect } from "react"
import ContactOption from './ContactOption'
import ContactForm from './ContactForm'

import '../css/App.css'


function App() {

  const animateBox = (position) => {
    console.log(position)
    const button = document.getElementById('buttonBg')

    if(position === 'right' && (button.classList.contains('slideMiddleFromRight') || button.classList.contains('slideMiddleFromLeft'))) {
      button.className = ''
      button.classList.add('slideRightFromMiddle')
    } else if(position == 'right') {
      button.className = ''
      button.classList.add('slideRightFromLeft')
    } 

    else if(position === 'middle' && (button.classList.contains('slideRightFromLeft') || button.classList.contains('slideRightFromMiddle'))) {
      button.className = ''
      button.classList.add('slideMiddleFromRight')
    } else if(position == 'middle') {
      button.className = ''
      button.classList.add('slideMiddleFromLeft')
    }

    else if(position === 'left' && (button.classList.contains('slideMiddleFromRight') || button.classList.contains('slideMiddleFromLeft'))) {
      button.className = ''
      button.classList.add('slideLeftFromMiddle')
    } else if(position === 'left') {
      button.className = ''
      button.classList.add('slideLeftFromRight')
    }
  }

    return (
      <div className="contact">
        <h1>Contact</h1>
        <div className='contact__options'>
          <div id='buttonBg' ></div>
          <ContactOption imgSrc='/public/images/mail.png' optionContent='@moderncaliber.com' position="left" animateBox={animateBox} />
          <ContactOption imgSrc='/public/images/location.png' optionContent='Reinholds, PA' position="middle" animateBox={animateBox} />
          <ContactOption imgSrc='/public/images/call.png' optionContent='(717) 964-8510' position="right" animateBox={animateBox} />
          <ContactForm />
        </div>
      </div>
    );
}

export default App;