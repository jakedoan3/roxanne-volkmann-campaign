import React from 'react'
import ContactForm from './ContactForm'

const Connect = () => {
  return (
    <div>
      <div className='connect'>
        <div className='connect-text'>
        <h1>
        Stay Connected with Roxanne
        </h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <h3>We hope you'll support our campaign for Ward 48. Please sign up for our email list below.</h3>
        </p>
        
        <ContactForm className="contact-form-main"/>
        </div>
      </div >
      
    </div>
  )
}

export default Connect