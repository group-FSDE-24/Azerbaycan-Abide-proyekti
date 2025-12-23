import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { monumentsFetch } from "../../store/slices/monumentsSlice"
import MonumentsItem from "../MonumentsPage/MonumentsItem"
import Search from "../MonumentsPage/Search"

function MonumentsPage() {

    const dispatch = useDispatch()

    useEffect(() => {
              dispatch(monumentsFetch())
    },[])

    const monuments = useSelector((state) => state.monumentsState.monuments)
    const searchValue = useSelector((state) => state.monumentsState.searchValue)

    const filtered = monuments.filter((item) => item.name.toLowerCase().startsWith(searchValue.toLowerCase()))
    
    return(
        <div>
            <header>
            <h1>Monuments Page</h1>
            </header>
            <main>
                <Search/>
                <ul className="monuments-list">{filtered.map((item) => <MonumentsItem key={item.id} {...item}/>)}</ul>
            </main>
            <footer>AZERBAIJAN ABIDE PROJECT</footer>
        </div>
    )
}

export default MonumentsPage