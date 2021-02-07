
const FieldsButtons = ({ onClick, lotCode}) => {
    console.log(lotCode)
    return (
        <div>
            <div class="sm:hidden">
                <label htmlFor="tabs" class="sr-only">Select a tab</label>
                <select id="tabs" name="tabs" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option selected>Year</option>
                <option>Variety</option>
                <option>Region</option>
                <option>Year & Variety</option>
                </select>
            </div>
            <div class="hidden sm:block">
                <div class="border-b border-gray-200">
                <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" onClick={() => onClick("year",lotCode)}>
                    Year
                    </a>
                    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" onClick={() => onClick("variety",lotCode)}>
                    Variety
                    </a>
                    <a href="#" class="border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" aria-current="page" onClick={() => onClick("region",lotCode)}>
                    Region
                    </a>
                    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" onClick={() => onClick("year-variety",lotCode)}>
                    Year & Variety
                    </a>
                </nav>
                </div>
            </div>
        </div>
    )
}

export default FieldsButtons
