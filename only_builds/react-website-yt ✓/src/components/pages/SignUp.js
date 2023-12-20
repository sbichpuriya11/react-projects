import React from 'react'
import '../../App.css'

export default function SignUp() {
    return <h1 className='sign-up' style={style}>SIGN UP</h1>
}

const style = {
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/img-8.jpg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: '#fff',
    fontSize: '100px',
}