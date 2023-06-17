import React from 'react'
import home from '../img/home.png'
import message from '../img/message.png'

export default function Sidebar() {
  return (
    <div>
      <nav>
        <ul>
          <li><img src={home}/>Home</li>
          <li><img src={message} />Messages</li>
        </ul>
      </nav>
    </div>
  )
}
