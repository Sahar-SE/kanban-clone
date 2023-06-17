import React from 'react'
import '../App.css'
import logo from '../img/Group 7.png'
import victors from '../img/Group 639.png'
import zoom from '../img/search-normal.png'
import navItems from '../img/Group 640.png'
import userImg from '../img/image 1.png'
import victor from '../img/Vector.png'

export default function Navbar() {
  return (
    <div className='flex'>
      <img src={logo} className='logo'/>
      <h1 className='title'>Project M.</h1>
      <img src={victors}  className='victors'/> 
      <div className='nav-line'></div>
      <div className='side-line'></div>
      <input type='text' placeholder={`search something...`} className='search'/>
      <img src={zoom} className='zoom' />
      <img src={navItems} className='navItems'/>
      <h2 className='user'>Anima Agrawal</h2>
      <h2 className='location'>U.P, India</h2>
      <img src={userImg} className='user-img'/>
      <img src={victor} className='victor'/>

    </div>
  )
}
