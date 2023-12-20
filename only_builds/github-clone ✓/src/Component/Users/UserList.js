import React from 'react'
import Spinner from '../Layout/Spinner'
import UserCard from './UserCard'

const UserList = (props) => {
    if (props.loading) {
        return <Spinner />
    }
    else {
        return (
            <div style={userStyle} className='mt-4'>
            {
                props.users.map((user) => 
                    ( <UserCard userInfo={user} key={user.id} />)
                )
            }
        </div>)
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap:'1rem'
}
export default UserList
