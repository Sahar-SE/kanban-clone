import React from 'react'
import '../App.css'
import logo from '../img/Group 7.png'
import victors from '../img/Group 639.png'
import zoom from '../img/search-normal.png'

export default function Navbar() {
  return (
    <div className='flex'>
      <img src={logo} className='logo'/>
      <h1 className='title'>Project M.</h1>
      <img src={victors}  className='victors'/> 
      <div className='nav-line'></div>
      <div className='side-line'></div>
      <input type='text' placeholder={`search something...`} className='search'/>
    </div>
  )
}
