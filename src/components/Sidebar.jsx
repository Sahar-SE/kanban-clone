import React from 'react'
import home from '../img/home.png'
import message from '../img/message.png'

export default function Sidebar() {
  return (
    <div>
      <nav>
        <table className='sideItems'>
          <tr>
            <td className='p-2'><img src={home} className=''/></td>
            <td className='p-2'>Home</td>
          </tr>

          <tr>
            <td className='p-2'><img src={message} /></td>
            <td className='p-2'>Messages</td>
          </tr>

        </table>
      </nav>
    </div>
  )
}
