import { useNavigate } from "react-router"

function MonumentsItem({name, description, city, year, image,id}) {
    const navigate = useNavigate()
    
    return(
        <li>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <button onClick={() => {
                navigate('/monument', {state:{name, description, city, year, image,id}})
            }}>ABIDEYE KEÇ</button>
        </li>
    )
}

export default MonumentsItem