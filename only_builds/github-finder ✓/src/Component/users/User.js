import React, { Component,Fragment,useEffect,useContext } from 'react'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'
import Repos from '../repos/Repos'
import GithubContext from '../../Context/github/githubContext'
const User = (props) => {
    
    const githubContext = useContext(GithubContext)
    const { getUser, loading, user,repos ,getUserRepos} = githubContext
    // This methods runs as soon as component is mounted
    useEffect(() => {
        getUser(props.match.params.login)
        getUserRepos(props.match.params.login)
        // eslint-disable-next-line
    }, []);

    // const componentDidMount = () => {
    //     this.props.getUser(props.match.params.login)
    //     this.props.getUserRepos(props.match.params.login)
    // }

    
    console.log(githubContext)
    const { hireable, avatar_url, name, location, bio, html_url, login, company, blog, followers, following, public_gists, public_repos } = user
    
    if (loading) return <Spinner />
        return (
            <Fragment>
                <Link to='/' className='btn btn-light'>Back To Search</Link>
            Hireable:{' '}{hireable ? <i className='fas fa-check text-success'></i> : <i className='fas fa-times-circle text-danger'></i>}
                <div className='card grid-2'>
                    <div className='all-center'>
                        <img src={avatar_url} className='round-img' alt='' style={{ width: '150px' }} />
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                    </div>
                    <div>
                        {bio && (<Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>)}
                        <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
                        <ul>
                            <li>{login && <Fragment>
                                <strong>Username: </strong>{login}
                            </Fragment>}</li>
                            <li>{company && <Fragment>
                                <strong>Company: </strong>{company}
                            </Fragment>}</li>
                            <li>{blog && <Fragment>
                                <strong>Website: </strong><a href={blog}>{blog}</a>
                            </Fragment>}</li>
                        </ul>
                    </div>
                </div>
                <div className='card text-center'>
                    <div className='badge badge-primary'>Followers: {followers}</div>
                    <div className='badge badge-success'>Following: {following}</div>
                    <div className='badge badge-light'>Public Repos: {public_repos}</div>
                    <div className='badge badge-dark'>Public Gists: {public_gists}</div>
                </div>
                <Repos repos={repos} />
            </Fragment>
        )
    }

export default User
