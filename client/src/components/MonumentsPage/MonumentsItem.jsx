function MonumentsItem({name, description, city, year, image}) {
    
    return(
        <li>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>{city}</p>
            <p>{year}</p>
            <p>{description}</p>
        </li>
    )
}

export default MonumentsItem