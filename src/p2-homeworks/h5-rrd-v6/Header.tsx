import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';
import  './Header.css';

function Header() {
    return (
        <div className='header'>
            <div className='toggle'>x</div>
            <div className='box'>
                <NavLink
                    className={({isActive}) => isActive ? 'act' : 'noEct'}
                    to={PATH.PRE_JUNIOR}> pre-junior </NavLink>
                <NavLink
                    className={({isActive}) => isActive ? 'act' : 'noEct'}
                    to={PATH.JUNIOR}> junior </NavLink>
                <NavLink
                    className={({isActive}) => isActive ? 'act' : 'noEct'}
                    to={PATH.JUNIOR_PLUS}> junior-plus+ </NavLink>
            </div>

        </div>
    )
}

export default Header
