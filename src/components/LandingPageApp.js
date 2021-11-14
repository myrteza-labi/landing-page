import React from 'react'
import './LandingPageApp.css'; 
import Intro from './intro/Intro'; 
import ImageBox from './ImageBox'; 
import TextBox from './TextBox'; 
import ImageAndTextBox from './ImageAndTextBox'; 
import ClientsTestimonial from './clients-testimonial/ClientsTestimonial';
import ThumbnailsContainer from './thumbnails-container/ThumbnailsContainer'; 
import Footer from './footer/Footer'; 

function LandingPageApp() {
    return (
        <div className="LandingPageApp">
            <Intro/>
            <ImageBox/>
            <TextBox/>
            <ImageAndTextBox/>
            <ClientsTestimonial/>
            <ThumbnailsContainer/>
            <Footer/>
        </div>
    )
}

export default LandingPageApp
