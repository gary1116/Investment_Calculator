import React from 'react'
import pageLogo from '../../assets/financial-profit.png';
import '../Header/Header.css';

function Header() {
  return (
    <>
      <img className='logo' src={pageLogo} alt="frontLogo" />
      <h1>Investment Calculator</h1>
    </>
  )
}

export default Header
