import React from 'react'
import classes from './Header.module.css'
import cineImage from '../assets/cine.jpg'

const Header = () => {
  return (
    <>
    <header className={classes.header}>
<h1>Jacob's Watchlist</h1>
<button>Cart</button>
    </header >
    <div className={classes['main-image']}>
    <img src={cineImage} alt="meal at a long table" />
    </div>

    
    
    </>
  )
}

export default Header