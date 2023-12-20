import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = (props) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#"><i className={props.icon}></i> {props.title}</a>
            <div className="container">
                <ul className='navbar-nav text-light ml-auto'>
                    <li className='m-2'>
                        <Link to='/' className='text-light'>
                            Home
                        </Link>
                    </li> 
                    <li className='m-2'>
                        <Link to='/about' className='text-light'>
                             About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon:'fab fa-github'
}
export default Navbar
