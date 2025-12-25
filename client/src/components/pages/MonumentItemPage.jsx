import { Link, useLocation } from "react-router"

function MonumentItemPage() {

    const { state } = useLocation()

    if(!state){
        return <h1>ERROR</h1>
    }

    const { name, description, city, year, image, id } = state
    console.log(state)
    return (
        <div className="monument-page">
            <Link to="/">BACK TO MONUMENTS</Link>
            <h1>MonumentItemPage</h1>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>{city}</p>
            <p>{year}</p>
            <p>{description}</p>
        </div>
    )
}

export default MonumentItemPage