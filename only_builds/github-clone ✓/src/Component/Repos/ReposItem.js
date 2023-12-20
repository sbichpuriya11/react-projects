import React from 'react'

const ReposItem = (props) => {
    // console.log(repo)
    const {repo} = props
    return (
            <li className='list-group-item'>
                <h5>
                    <a href={repo.html_url}>{repo.name}</a>
                </h5>
                <div className='col-md-6 ml-auto'>
                    <span className='badge badge-pill rounded-left rounded-bottom rounded-right rounded-top p-2 badge-success m-4 col-sm-3'>
                        <i className="fas fa-code-branch"></i> Forks {repo.forks}
                    </span>
                    <span className='badge badge-pill rounded-left rounded-bottom rounded-right rounded-top p-2 badge-info mr-4 col-sm-3'>
                        <i className="far fa-eye"></i> Watch {repo.watchers}
                    </span>
                    <span className='badge badge-pill rounded-left rounded-bottom rounded-right rounded-top p-2 badge-danger mr-4 col-sm-3'>
                        <i className="fas fa-star"></i> Stars {repo.stargazers_count}
                    </span>
                </div>
            </li>
    )
}

export default ReposItem
