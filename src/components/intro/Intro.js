import React from 'react'
import './Intro.css'; 
import Header from './Header'; 
import ToggleMenu from './ToggleMenu'; 
import MainTitle from './MainTitle'; 
import Arrow from './Arrow'; 
import IntroImage from './IntroImage'; 


function Intro() {
    return (
        <section className="Intro">
            <Header/>
            <ToggleMenu/>
            <MainTitle/>
            <Arrow/>
            <IntroImage/>
        </section>
    )
}

export default Intro
