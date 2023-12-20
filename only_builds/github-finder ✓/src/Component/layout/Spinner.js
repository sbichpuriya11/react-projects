import React, { Fragment } from 'react'
import ring from './ring.gif'
const Spinner = () => {
    return (
        <Fragment>
            <img src={ring} alt='Loading...' style={style}/>
        </Fragment>
    )
}

const style = {
    width: '50px',
    margin: 'auto',
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform:'translate(-50%,-50%)'
}
export default Spinner