import './App.css';
import { Component } from 'react';
import React from 'react'
import Navbar from './Component/Layout/Navbar';
import UserList from './Component/Users/UserList';
import axios from 'axios'
import SearchUser from './Component/Users/SearchUser';
import Footer from './Component/Layout/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './Component/Pages/About';
import Profile from './Component/Users/Profile.js';
class App extends Component {
  state = {
    users: [],
    loading: false,
    searchText: '',
    defaultList: [],
    singleUser: {},
    reposList:[]
  }

  componentDidMount = async () => {
    this.setState({ loading: true })
    const users = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({ loading: false, users: users.data, defaultList: users.data })
    // console.log(users)
  }

  onChange = (event) => {
    this.setState({ searchText: event.target.value })
  }

  showError = (message, className) => {
    if (document.querySelector('#alert') == undefined) {
      // Creating element for alert
      let p = document.createElement('p')
      p.className = className
      p.innerHTML = `<i class="fas fa-info-circle"></i> ${message}`
      p.id = 'alert'
      let parentElement = document.querySelector('.myContainer')
      let child = document.querySelector('form')
      parentElement.insertBefore(p, child)
      // to clear the error
      setTimeout(() => {
        p.remove()
      }, 3000)

    }
  }

  searchUserList = async (e) => {
    e.preventDefault()
    if (this.state.searchText.trim() !== '') {
      this.setState({ loading: true })
      const res = await axios.get(`https://api.github.com/search/users?q=${this.state.searchText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      console.log(res)
      this.setState({ users: res.data.items, loading: false })
    } else {
      this.showError('Please enter some text!', 'alert alert-danger col-md-10 mx-auto mt-3 text-left')
    }
  }

  clearField = (e) => {
    e.preventDefault()
    this.setState({ searchText: '', users: this.state.defaultList })
  }


  userBio = async (username) => {
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({singleUser:res.data,loading:false})
  }

  getRepos = async (login) => {
    const res = await axios.get(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({ reposList: res.data,loading:false })
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className='container myContainer'>
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <React.Fragment>
                    <SearchUser onChange={this.onChange} searchText={this.state.searchText} searchUserList={this.searchUserList} clearField={this.clearField} />
                    <UserList users={this.state.users} loading={this.state.loading} />
                  </React.Fragment>
                )}
              />

              <Route
                exact
                path='/about'
                render={About}
              />

              <Route
                exact
                path='/user/:login'
                render={linkDesc => (<Profile userBio={this.userBio} dataInfo={linkDesc} userProfile={this.state.singleUser} loading={this.state.loginState} getRepos={this.getRepos} reposList={this.state.reposList}/>)}
              />
              {/* The linkdesc contains the all the url info.. Therefore it is passed when the more button is clicked on userCard */}
            </Switch>

          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
