import React, { Component,Fragment } from 'react'
import Spinner from '../Layout/Spinner'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Repos from '../Repos/Repos'
class Profile extends Component {
   constructor() {
      super();
      this.state = {
         repos0: {},
         repos1:{},
         repos2:{},
         repos3:{},
         repos4:{}
      }
   }
    // This is to just run the function userBio as soon as this link is click.
   componentDidMount() {
       this.props.userBio(this.props.dataInfo.match.params.login)
       this.props.getRepos(this.props.dataInfo.match.params.login)
   }

   static propTypes = {
      // spinner: PropTypes.bool.isRequired,
      dataInfo: PropTypes.object.isRequired,
      userProfile: PropTypes.object.isRequired,
      getRepos: PropTypes.func.isRequired,
      userBio: PropTypes.func.isRequired,
      reposList:PropTypes.array.isRequired
   }

   render() {
      const { name, login, avatar_url, company, created_at, location, bio, blog, html_url, twitter_username, followers, following, public_repos, public_gists, hireable } = this.props.userProfile;
      const spinner = this.props.loading
      const repos = this.props.reposList
      
      
      if (spinner) {
         return <Spinner />
      } 
         return (
            

<Fragment>
   <div className="main-body my-3">
      <div className="row gutters-sm">
         <div className="col-md-4 mb-3">
            <div className="card">
               <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                     <img src={avatar_url} alt="Admin" className="rounded-circle" width={150} />
                     <div className="mt-3">
                        <h4>{login}</h4>
                        <p className="text-muted font-size-sm"><i className="fas fa-map-pin"></i> {location}</p>
                        <a href={html_url} className='btn btn-info'>View in Github <i className='fas fa-external-link-alt'></i></a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="card mt-3">
               <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                     <h6 className="mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe mr-2 icon-inline">
                           <circle cx={12} cy={12} r={10} />
                           <line x1={2} y1={12} x2={22} y2={12} />
                           <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        Website
                     </h6>
                     <span className="text-primary">{blog ? blog : '---'}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                     <h6 className="mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github mr-2 icon-inline">
                           <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        Github
                     </h6>
                     <span className="text-secondary">/{login}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                     <h6 className="mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter mr-2 icon-inline text-info">
                           <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                        Twitter
                     </h6>
                     <span className="text-secondary">{twitter_username ? twitter_username : '---'}</span>
                  </li>
               </ul>
            </div>
         </div>
         <div className="col-md-8">
            <div className="card mb-3">
               <div className="card-body">
                  <div className="row">
                     <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                     </div>
                     <div className="col-sm-9 text-secondary">
                        {name}
                     </div>
                  </div>
                  <hr />
                  <div className="row">
                     <div className="col-sm-3">
                        <h6 className="mb-0">Hireable</h6>
                     </div>
                     <div className="col-sm-9 text-secondary">
                        <i className={hireable ? 'fas fa-check-circle text-success' : 'fas fa-times-circle text-danger'}></i>
                     </div>
                  </div>
                  <hr />
                  <div className="row">
                     <div className="col-sm-3">
                        <h6 className="mb-0">Company</h6>
                     </div>
                     <div className="col-sm-9 text-secondary">
                        {company ? company : '---'}
                     </div>
                  </div>
                  <hr />
                  <div className="row">
                     <div className="col-sm-3">
                        <h6 className="mb-0">Bio</h6>
                     </div>
                     <div className="col-sm-9 text-secondary">
                        {bio ? bio : '---'}
                     </div>
                  </div>
                  <hr />
                  <div className="row">
                     <div className="col-sm-3">
                        <h6 className="mb-0">Member Since</h6>
                     </div>
                     <div className="col-sm-9 text-secondary">
                        {new Date(created_at).toDateString()}
                     </div>
                  </div>
               </div>
            </div>
            <div className="row gutters-sm">
               <div className="col-sm-6 mb-3">
                  <div className="card h-60">
                     <div className="card-body">
                        <h5 className="align-items-center mb-3"><i className="text-warning fas fa-folder-open"></i> Public Repositories</h5>
                        <p>{public_repos}</p>
                        <hr/>
                        <h5 className="align-items-center mb-3"><i className="text-warning fas fa-users"></i> Followers</h5>
                        <p>{followers}</p>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 mb-3">
                  <div className="card h-60">
                     <div className="card-body">
                        <h5 className="align-items-center mb-3"><i className="text-warning far fa-star"></i> Following</h5>
                        <p>{following}</p>
                        <hr/>
                        <h5 className="align-items-center mb-3"><i className="text-warning fab fa-codepen"></i> Public Gists</h5>
                        <p>{public_gists}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
                  
      <div className='card p-3'>
         <h4 className='text-left'>Latest Repository</h4>
         <div className='card-body'>
            <Repos repos={repos}/>
         </div>
      </div>
                  


   </div>
   <Link to='/' className='btn btn-primary rounded-0'>
      <i className="fas fa-chevron-left"></i> Back to search
   </Link>
</Fragment>
         )
      }
   }


export default Profile
