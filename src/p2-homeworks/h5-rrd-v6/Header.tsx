import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';

function Header() {
    return (
        <div className="header">
            <NavLink
                className={({isActive}) => {
                    return isActive ? 'act' : 'def'
                }}
                style={(params) => {
                return {color: params.isActive ? 'lime' : 'white'}
            }}
                to={PATH.PRE_JUNIOR}> pre-junior </NavLink>
            <NavLink
                className={({isActive}) => {
                    return isActive ? 'act' : 'def'
                }}
                style={(params) => {
                return {color: params.isActive ? 'lime' : 'white'}
            }}
                to={PATH.JUNIOR}> junior </NavLink>
            <NavLink
                className={({isActive}) => {
                    return isActive ? 'act' : 'def'
                }}
                style={(params) => {
                return {color: params.isActive ? 'lime' : 'white'}
            }}
                to={PATH.JUNIOR_PLUS}> junior-plus+ </NavLink>
        </div>
    )
}

export default Header
