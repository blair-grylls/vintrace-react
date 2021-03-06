/**
 * Each wine component is looped through and displayed. Only necessary details are shown. Can be clicked on to expand.
 */

const Wine = ({ wine, onLoad }) => {
    var description = (wine.description) ? wine.description:"N/A"
    return (
        <div class="bg-white px-4 py-4 sm:px-6" onClick={() => onLoad([true,false,false,false],"year",wine.lotCode)}>
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-indigo-600 truncate">
              {wine.lotCode}
            </p>
            <div class="ml-2 flex-shrink-0 flex">
              <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {wine.volume}L
              </p>
            </div>
          </div>
          <div class="mt-2 sm:flex sm:justify-between">
            <div class="sm:flex">
              <p class="flex items-center text-sm text-gray-500">
                {description} 
              </p>
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
              <p>
                {wine.tankCode}
              </p>
            </div>
          </div>
        </div>
    )
}

export default Wine