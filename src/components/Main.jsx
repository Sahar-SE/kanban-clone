import React from 'react'
import '../App.css'
import edit from '../img/edit.png'
import link from '../img/link.png'
import plus from '../img/plus.png'
import user1 from '../img/Ellipse 12.png'
import user2 from '../img/Ellipse 14.png'
import user3 from '../img/Ellipse 13.png'
import user4 from '../img/Ellipse 15.png'
import filter from '../img/filter.png'
import calender from '../img/calendar.png'

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
      <img src={user1} alt='user' className='users user1'/>
      <img src={user2} alt='user' className='users user2'/>
      <img src={user3} alt='user' className='users user3'/>
      <img src={user4} alt='user' className='users user4'/>
      <div className='more'>
        <p className='absolute left-1 top-1 '>+2</p>
      </div>
      <button className='f-btn btn-txt'>
        <img src={filter} alt='filter' className='absolute left-6 bottom-2'/>
        <p className='absolute left-12 bottom-2'>Filter</p>
      </button>
      <button className='t-btn btn-txt'>
        <img src={calender} alt='calender' className='absolute left-6 bottom-2'/>
        <p className='absolute left-12 bottom-2'>Today</p>
      </button>



    </div>
  )
}
