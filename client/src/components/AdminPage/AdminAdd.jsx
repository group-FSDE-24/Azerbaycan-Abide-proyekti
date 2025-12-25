import { useDispatch, useSelector } from "react-redux"
import { addMonumentFetch } from "../../store/slices/monumentsSlice"


function AdminAdd() {

    const dispatch = useDispatch()

    function handleForm(ev) {
        ev.preventDefault()
        let formData = Object.fromEntries([...new FormData(ev.target)])
        dispatch(addMonumentFetch(formData))
    }

    const addLoading = useSelector((state) => state.monumentsState.addLoading)
    const addError = useSelector((state) => state.monumentsState.addError)

    if(addLoading){
        return <h1>LOADING...</h1>
    }

    if(addError){
        return <h1>ERROR</h1>
    }

    return (
        <form onSubmit={handleForm}>
            <input type="text" name="name" placeholder="name" />
            <input type="text" name="city" placeholder="city" />
            <input type="text" name="year" placeholder="year" />
            <input type="text" name="description" placeholder="description" />
            <input type="text" name="image" placeholder="image" />
            <button>ADD</button>
        </form>
    )
}

export default AdminAdd