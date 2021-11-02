import React from 'react'

function Search_result(props) {
    return (
        <div>
            <img src={`https://source.unsplash.com/400x300/?${props.imgSearch}`} alt="search" />
        </div>
    )
}

export default Search_result;
