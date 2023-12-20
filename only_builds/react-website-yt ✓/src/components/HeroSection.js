import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'
function HeroSection() {
    console.log(`${process.env.PUBLIC_URL}/videos/video-1.mp4`)
    return (
        <div className='hero-container' style={style}>
            {/* <video src={process.env.PUBLIC_URL +'/videos/video-1.mp4'} autoPlay loop muted /> */}
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle'></i></Button>
            </div>
        </div>
    )
}

const style = {
    background: `url("${process.env.PUBLIC_URL}/images/img-home.jpg") center center/cover no-repeat`
}
export default HeroSection
