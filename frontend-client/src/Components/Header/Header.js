import React from 'react'
import '../../index.css'
import '../Header/Header.css'

function Header() {
  return (
    <section className='Header_Container'> {/* Block-Level Element: */}
        <h4>Welcome to </h4> 
        <h2>SpotScope</h2>
        <h4>IP Geolocation Service</h4>
    </section>
  )
}

export default Header;  

