import React,{useState,useContext} from 'react'
import GithubContext from '../../Context/github/githubContext'
import AlertContext from '../../Context/alert/alertContext'
const Search = () => {

    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)
    const [text, setText] = useState('');
    const {clearUsers} = githubContext

    const onChange = (event) => {
        setText(event.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (text === '') {
           alertContext.setAlert('Please enter something', 'light')
        } else {                    
        githubContext.searchUsers(text)
        setText('')
        }
    }
    return (
            <div>
                <form className='form' onSubmit={onSubmit}>
                    <input type="text" name="text" id="" placeholder='Search Users...' value={text} onChange={onChange}/>
                    <input type="submit" value="Search" className='btn btn-block btn-dark'/>                
                </form>
                {githubContext.users.length>0 && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
            </div>
        )
    }


export default Search
