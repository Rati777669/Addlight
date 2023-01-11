import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/menu.css'
const HotAccessoriesmenu = () => {
  return (
    <div className='menu'>
      <Link className='menulist' to='/decor'>Decor</Link>
      <Link className='menulist' to='/lighting'>lighting</Link>
      <Link className='menulist' to='/tabletop'>Table top</Link>
      <Link className='menulist' to='/outdoor'>Outdoor</Link>
      <Link className='menulist' to='/brands'>Brands</Link>
    </div>
  )
}

export default HotAccessoriesmenu