import React from 'react'
import '../Footer/Footer.css';
import {AiOutlineMail} from 'react-icons/ai';
import {AiOutlineCopyrightCircle} from 'react-icons/ai'; 

function Footer() {
  return (
    <section className='FooterContainer'>
        <div className='FooterFlexContainer'>
            <span></span> {/*Dummy Element*/}
            <a className='MailIcon' href='mailto:akskan@umich.edu'> <AiOutlineMail /></a> {/* In-Line element by default */ }
            <span><AiOutlineCopyrightCircle />2023 SpotScope</span>
            <span></span> {/*Dummy Element */}
        </div>
    </section>
  )
}

export default Footer
