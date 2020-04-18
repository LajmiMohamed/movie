import React from 'react'

 const Search =(props)=> {
    return (
        <div>
            <input placeholder="search" onChange={(e)=>props.setkeyword(e.target.value )} value={props.keyword}/>

        </div>
    )
}
export default Search