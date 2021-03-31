import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header>
      <div className='container container-nav'>
        <div className='site-title'>
          <Link to='/' className='logo'>
            The<span>Cocktail</span>App
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link className='link' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='link' to='/about'>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
