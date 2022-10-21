import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/scss/Navbar.css';
export default function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Whoweare'>Who we are</Link></li>
          <li><Link to='/SkittyBop'>SkittyBop</Link></li>
          <li><Link to='/Blog'>Blog</Link></li>
          <li><Link to='/Pricing'>Pricing</Link></li>
          <li><Link to='/Developer'>Developer</Link></li>
        </ul>
      </nav>
    </div>
  )
}
