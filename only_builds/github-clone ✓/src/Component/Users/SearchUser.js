import React, { Fragment} from 'react'

function SearchUser(props) {
    return (
            <form className='form m-3 w-50'>
                <div className='form-group'>                    
                    <div className="input-group mb-3">
                        <input type="text" className="form-control rounded-0" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" value={props.searchText} onChange={props.onChange}/>
                    <div className="input-group-append mx-2">
                            <button className="btn btn-warning text-light rounded" id="basic-addon2" onClick={props.searchUserList}>
                            <i className="fas fa-search"></i> Search
                            </button>
                    </div>
                    <div className="input-group-append mx-2">
                            <button className="btn btn-danger text-light rounded" id="basic-addon2" onClick={props.clearField}>
                            <i className="fas fa-times"></i> Clear
                            </button>
                    </div>
                    </div>
                </div>
            </form>
    )
}

export default SearchUser
