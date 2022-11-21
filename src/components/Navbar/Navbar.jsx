import React from 'react';
import style from './navbar.module.css'
import { NavLink, useNavigate } from 'react-router-dom';
import weblogo from '../../assets/logos/v2-no-bg.png'

const Navbar = () => {
const navigate = useNavigate();

  const logoutHandler = () => {
    navigate('/');
  }

  const addActiveClass = ({ isActive }) => isActive ? `${style.active}` : {};

  return (

    <nav className={style['nav-container']}>   
      <ul className={style.ul}>
      <div className={style['main-logo']}><img src={weblogo} width='180px' height='60px' alt='website logo'/></div>
          <NavLink className={addActiveClass} to='/home'><li className={addActiveClass}><i className="fa-solid fa-house"></i></li></NavLink>
          <NavLink className={addActiveClass} to='/battles'><li><i className="fa-solid fa-gamepad"></i></li></NavLink>
          <NavLink className={addActiveClass} to='/rankings'><li><i className="fa-solid fa-trophy"></i></li></NavLink>
          <NavLink className={addActiveClass} to='/user'><li><i className="fa-solid fa-user"></i></li></NavLink>
          <NavLink className={addActiveClass} to='/settings'><li><i className="fa-solid fa-gear"></i></li></NavLink>
          <NavLink className={addActiveClass} to='/test'><li><i className="fa-solid fa-circle-question"></i></li></NavLink>
          <div className={style.logout}>
          <button onClick={logoutHandler}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
         </div>
      </ul>
    </nav>
  )
}

export default Navbar



