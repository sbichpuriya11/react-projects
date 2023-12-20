import React from 'react'
import ring from './ring.gif'
const Spinner = ()=> {
    return (
        <div>
            <img src={ring} style={img}/>
        </div>
    )
}

const img = {
    position: 'absolute',
    top: '50%',
    left:'50%',
    transform: 'translate(-50%, -50%)',

}

export default Spinner
