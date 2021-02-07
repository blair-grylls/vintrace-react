import SearchBar from './SearchBar'
import Wines from './Wines'
import { FaWineGlassAlt } from 'react-icons/fa'

const SearchHeader = ({ onDelete, onSearch, searchText, wines, onLoad}) => {
    return (
        <div class="pb-5 border-b border-gray-200">
            <div class="-ml-2 -mt-2 flex justify-center flex-wrap items-baseline">
                <h3 class="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900">
                Wine Search
                </h3>
                <FaWineGlassAlt />
            </div>
            <SearchBar onDelete={onDelete} searchText={searchText} onSearch={onSearch}/>
            <Wines wines={wines} onLoad={onLoad}/>
        </div>
    )
}

export default SearchHeader

