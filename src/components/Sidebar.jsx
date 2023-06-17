import React from 'react'

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
