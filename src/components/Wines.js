import Wine from './Wine'

const Wines = ({ wines, onLoad }) => {
    return (
        <>
            { wines.map((wine) => (
            <Wine key={wine.lotCode} wine={wine} onLoad={onLoad}/>   
            ))}
        </>
    )
}

export default Wines
