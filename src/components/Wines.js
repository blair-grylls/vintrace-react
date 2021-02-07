import Wine from './Wine'

/**
 * This list is populated by the searchText in the SearchBar. Loops through the list and displays the single Wine components.
 */

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
