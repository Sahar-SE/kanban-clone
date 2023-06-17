import React from 'react'
import home from '../img/home.png'
import message from '../img/message.png'
import task from '../img/message.png'
import member from '../img/profile-2user.png'
import setting from '../img/setting-2.png'
import add from '../img/add-square.png'
import lamp from '../img/lamp-on.png'

export default function Sidebar() {
  return (
    <div>
      <nav>
        <table className='sideItems'>
          <tr>
            <td className='p-2'><img src={home} alt='logo'/></td>
            <td className='p-2'>Home</td>
          </tr>

          <tr>
            <td className='p-2'><img src={message} alt='logo' /></td>
            <td className='p-2'>Messages</td>
          </tr>

          <tr>
            <td className='p-2'><img src={task} alt='logo'/></td>
            <td className='p-2'>Tasks</td>
          </tr>

          <tr>
            <td className='p-2'><img src={member} alt='logo'/></td>
            <td className='p-2'>Member</td>
          </tr>

          <tr>
            <td className='p-2'><img src={setting} alt='logo'/></td>
            <td className='p-2'>Settings</td>
          </tr>
        </table>
        <div className='side-hr-line'></div>
          <p className='myProjects'>MY PROJECTS</p>
          <img src={add} alt='add' className='add'/>

        <table className='project-items'>
          <tr className='active'>
            <td className='p-2'><div className='circles circle1'></div></td>
            <td className='p-2'>Mobile App</td>
            <td className='p-2'>...</td>
          </tr>

          <tr>
            <td className='p-2'><div className='circles circle2'></div></td>
            <td className='p-2'>Website Redesign</td>
            <td className='p-2 dotHidden'>...</td>
          </tr>

          <tr>
            <td className='p-2'><div className='circles circle3'></div></td>
            <td className='p-2'>Design System</td>
            <td className='p-2 dotHidden'>...</td>
          </tr>

          <tr>
            <td className='p-2'><div className='circles circle4'></div></td>
            <td className='p-2'>Wireframes</td>
            <td className='p-2 dotHidden'>...</td>
          </tr>
        </table>
        <div className='side-card bottom-2'>
          <p className='b-2 z-10 text-black card-title'>Thoughts Time</p>
          <p className='card-text'>We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
          <button className='absolute top-36 left-9 p-2 bg-white rounded-md'>Write a message</button>
        </div>
        <div className='lamp'></div>
        <div className='lamp-bg'></div>
        <img src={lamp} alt='lamp' className='lamp-img'/>
      </nav>
    </div>
  )
}
