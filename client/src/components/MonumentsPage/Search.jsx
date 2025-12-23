import { useDispatch } from "react-redux"
import { getSearchValue } from "../../store/slices/monumentsSlice"

function Search() {
    const dispatch = useDispatch()

    return(
          <input type="text" onChange={(ev) => dispatch(getSearchValue(ev.target.value))}/>
    ) 
}

export default Search