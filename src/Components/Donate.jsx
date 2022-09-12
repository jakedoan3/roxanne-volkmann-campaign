import React, { useState } from 'react'

const Donate = () => {
  const [donate, setDonate] = useState(false)
  const [donation, setDonation] = useState("")

  const handleDonation = (e) => {
    setDonation(e.target.value);
  };

  const submitDonation = () => {
    setDonate(true)
    console.log("Successful donation!")
  }

  return (
    <div className='donate'>
      <div className='donate-text'>
      <h1>Donate</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      {donate? <p>Thank you for your generous donation!</p>:
      
      <form onSubmit={submitDonation} className="donateForm">
        
          <label className="donationInput">
            <input className='donation-amount'
            placeholder="Donation amount ($USD)"
            type="number" 
            value={donation} 
            onChange={handleDonation} 
            name="zip" />
          </label>
        
          <input 
          className="donate-button-main"
          type="submit" value="Submit" />
        
      </form>}
      
      </div>
      
    </div>
  )
}

export default Donate