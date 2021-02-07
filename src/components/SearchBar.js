import { FaTimes } from 'react-icons/fa'

const SearchBar = ({ searchText, onSearch, onDelete }) => {
    return (
        <div>
            <div class="mt-1 relative rounded-md shadow-sm">
                <input type="text" name="account_number" id="account_number" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md" placeholder="Search for lotCode or description" value={searchText} onChange={ (e) => 
                    onSearch(e.target.value)}
                ></input>
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <FaTimes
                    style={{ cursor: 'pointer' }} 
                    onClick={() => onDelete(true)}
                    />
                </div>
            </div>
        </div>   
    )
}

export default SearchBar

