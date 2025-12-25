import { useDispatch, useSelector } from "react-redux"
import { deleteMonumentFetch, getId } from "../../store/slices/monumentsSlice"

function MonumentsItemAdmin({ name, image, id }) {
    const dispatch = useDispatch()
    const deleteLoadingId = useSelector((state) => state.monumentsState.deleteLoadingId)
    const deleteErrorId = useSelector((state) => state.monumentsState.deleteErrorId)
    const selectedId = useSelector((state) => state.monumentsState.selectedId)

    if(deleteLoadingId && selectedId === id){
        console.log('LOADING')
        return <h1>LOADING...</h1>
    }

    if(deleteErrorId && selectedId === id){
        console.log('ERROR')
        return <h1>ERROR</h1>
    }

    return (
        <li>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <button onClick={() => {
                dispatch(getId(id))
                dispatch(deleteMonumentFetch(id))
            }}>DELETE</button>
        </li>
    )
}

export default MonumentsItemAdmin