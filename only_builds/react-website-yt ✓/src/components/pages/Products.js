import React from 'react'
import '../../App.css'

export default function Products() {
    return <h1 className='products' style={style}>PRODUCTS</h1>
}

const style = {
    backgroundImage: `url('${process.env.PUBLIC_URL}images/img-1.jpg')`,
    backgroundPosition: 'center',
    backgroundSize: 'fill',
    backgroundRepeat: 'no-repeat',
    color: '#fff',
    fontSize: '100px',
}