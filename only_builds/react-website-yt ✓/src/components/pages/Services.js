import React from 'react'
import '../../App.css'

export default function Services() {
    return <h1 className='services' style={style}>SERVICES</h1>
}

const style = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/img-2.jpg)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: '#fff',
    fontSize: '100px'
}