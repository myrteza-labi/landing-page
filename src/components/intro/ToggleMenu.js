import React from 'react'
import './ToggleMenu.css'; 
import Shape from './Shape'; 
import Tag from '../Tag'; 

function ToggleMenu() {
    return (
        <nav className="ToggleMenu">
            <ul className="ulToggleMenu">
                <Shape/>
                <Tag/>
                <Tag/>
                <Tag/>
                <Tag/>
            </ul>
        </nav>
    )
}

export default ToggleMenu
