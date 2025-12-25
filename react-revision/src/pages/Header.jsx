import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-green-700 h-[15vh] flex gap-5 px-5 py-5'>
      <Link to={'/More'}><div>More</div></Link>
      <Link to={'/Contact'}><div>Contact</div></Link>
      <Link to={'/'}><div>Home</div></Link>
    </div>
  )
}

export default Header