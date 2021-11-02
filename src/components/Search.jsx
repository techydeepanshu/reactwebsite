import React , {useState} from 'react'
import Search_result from './Search_result';

const Search=()=> {
    const [img, setImg] = useState('');
    const inputEvent = (event) =>{
        const data = event.target.value;
        console.log(data);
        setImg(data);
    }
    return (
        <>
            <div className="">
                <input type="text" placeholder="Enter Image Name" onChange={inputEvent} />
            </div>
            {img === ""? null : <Search_result imgSearch={img} />}
        </>
    )
}

export default Search;
