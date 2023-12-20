import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const UserItem = ({user: {login,avatar_url}})=> {
        // const {avatar_url,login,html_url } = props.user
        return (
            <div className='card text-center'>
                <img src={avatar_url} alt='' className='round-img' style={{ width: '100px' }} />
                <h3>{login}</h3>
                <div>
                    <Link to={`/user/${login}`} className ='btn btn-dark btn-sm my-1'>More</Link>
                </div>
            </div>
        )
    }

UserItem.propTypes = {
    user:PropTypes.object.isRequired,
}
export default UserItem
