import React from 'react'
import home from '../img/home.png'
import message from '../img/message.png'
import task from '../img/message.png'
import member from '../img/profile-2user.png'
import setting from '../img/setting-2.png'
import add from '../img/add-square.png'

export default function Sidebar() {
  return (
    <div>
      <nav>
        <table className='sideItems'>
          <tr>
            <td className='p-2'><img src={home}/></td>
            <td className='p-2'>Home</td>
          </tr>

          <tr>
            <td className='p-2'><img src={message} /></td>
            <td className='p-2'>Messages</td>
          </tr>

          <tr>
            <td className='p-2'><img src={task} /></td>
            <td className='p-2'>Tasks</td>
          </tr>

          <tr>
            <td className='p-2'><img src={member} /></td>
            <td className='p-2'>Member</td>
          </tr>

          <tr>
            <td className='p-2'><img src={setting} /></td>
            <td className='p-2'>Settings</td>
          </tr>
        </table>
        <div className='side-hr-line'></div>
          <p className='myProjects'>MY PROJECTS</p>
          <img src={add} className='add'/>

        <table className='project-items'>
          <tr>
            <td className='p-2'><div className='circles circle1'></div></td>
            <td className='p-2'>Mobile App</td>
            <td className='p-2'>...</td>
          </tr>

          <tr>
            <td className='p-2'><div className='circles circle2'></div></td>
            <td className='p-2'>Website Redesign</td>
            <td className='p-2'>...</td>
          </tr>

          <tr>
            <td className='p-2'><div className='circles circle3'></div></td>
            <td className='p-2'>Design System</td>
            <td className='p-2'>...</td>
          </tr>

          <tr>
            <td className='p-2'><div className='circles circle4'></div></td>
            <td className='p-2'>Wireframes</td>
            <td className='p-2'>...</td>
          </tr>
        </table>
      </nav>
    </div>
  )
}
