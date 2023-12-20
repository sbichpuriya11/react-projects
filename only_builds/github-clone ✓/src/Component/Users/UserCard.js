import React from 'react'
import {Link} from 'react-router-dom'
const UserCard = (props) => {
    return (
        <div className="card" style={{ width: '18rem',boxShadow:'1px 1px 2px #ccc'}}>
            <img src={props.userInfo.avatar_url} className="mx-auto d-block mt-3" alt="..." style={{width:'100px',borderRadius:'50px'}} />
        <div className="card-body">
            <p>{props.userInfo.login}</p>
                <Link to={`/user/${props.userInfo.login}`} className="btn btn-info">More <i className="fas fa-chevron-right"></i></Link>
        </div>
      </div>
    )
}

export default UserCard
