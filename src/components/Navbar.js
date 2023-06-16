import React from 'react'
import '../App.css'
import logo from '../img/Group 7.png'

export default function Navbar() {
  return (
    <div className='flex'>
      <img src={logo} className='logo'/>
      <h1 className='title'>Project M.</h1>   
    </div>
  )
}
