import React from 'react'
import './Footer.css'; 
import Logo from '../Logo'; 
import FooterMenu from './FooterMenu'; 
import IconContainer from './IconContainer'; 

function Footer() {
    return (
        <footer className="Footer">
            <Logo/>
            <FooterMenu/>
            <IconContainer/>
        </footer>
    )
}

export default Footer
