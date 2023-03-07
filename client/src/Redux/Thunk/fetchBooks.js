import { loadedBooks } from "../Books/action"

const fetchProduct = () =>{
    return async (dispatch)=>{
        const res = await fetch('http://localhost:9000/books')
        const data = await res.json()

        if(data.length){
            dispatch(loadedBooks(data))
        }
    }
}

export default fetchProduct