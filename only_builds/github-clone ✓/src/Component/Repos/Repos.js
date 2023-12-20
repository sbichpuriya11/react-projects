import React from 'react'
import ReposItem from './ReposItem'
const Repos = (props) => {
    const {repos} = props
    return <ul className='list-group-flush list-group text-left'>{repos.map((repo) => <ReposItem repo={repo} key={repo.id}/>)}</ul>
}

export default Repos