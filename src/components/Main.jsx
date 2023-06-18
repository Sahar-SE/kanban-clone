import React from 'react'
import '../App.css'
import edit from '../img/edit.png'
import link from '../img/link.png'
import plus from '../img/plus.png'

export default function main() {
  return (
    <div>
      <h1 className='header'>Mobile App</h1>
      <div className='rectangle rec-edit'>
        <img src={edit} alt='edit' className='absolute left-1 top-1 right-1 bottom-1'/>
      </div>
      <div className='rectangle rec-link'>
      <img src={link} alt='link' className='absolute left-1 top-1 right-1 bottom-1'/>
      </div>
      <img src={plus} alt='plus' className='plus'/>
      <p className='invite'>Invite</p>


    </div>
  )
}
