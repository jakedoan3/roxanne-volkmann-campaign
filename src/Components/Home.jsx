import React from 'react'
import ContactForm from './ContactForm'


const Home = () => {
  return (
    <div className='home'>
      <div className='homeHeader'>Home</div>
        <div className='smallForm'>
          <p className='homeJoin'>Join our campaign!</p>
         <ContactForm/>
        </div>
    </div>
  )
}

export default Home