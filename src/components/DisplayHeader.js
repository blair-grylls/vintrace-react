import { FaArrowLeft } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { FaRegGrinHearts } from 'react-icons/fa'
import BreakdownTable from './BreakdownTable'
import BreakdownCard from './BreakdownCard'
import FieldsButtons from './FieldsButtons'

const DisplayHeader = ({ onClick, calculatedBreakdown, wine ,onBack }) => {
    return (
        <div>
        <li>
            <a href="#" class="block hover:bg-gray-50">
                <div class="flex items-center px-4 py-4 sm:px-6">
                    <div class="min-w-0 flex-1 flex items-center">
                        <div class="flex-shrink-0">
                        <FaArrowLeft
                            style={{ cursor: 'pointer' }} 
                            onClick={() => onBack(true)}
                            />
                        </div>
                        <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                            <div>
                                <p class="text-sm font-medium text-indigo-600 truncate">{wine.lotCode}</p>
                                <p class="mt-2 flex items-center text-sm text-gray-500">
                                <FaRegGrinHearts
                                />       
                                    <span class="truncate">{wine.description}</span>
                                </p>
                            </div>
                <div class="hidden md:block">
                <div>
                    <p class="mt-2 flex items-center text-sm text-gray-500">
                        
                    </p>
                </div>
                </div>
            </div>
            </div>
            <div>
            <FaEdit
                            style={{ cursor: 'pointer' }} 
                            onClick={() => alert("Clicked")}
                        />
            </div>
        </div>
        </a>
        </li>
        <BreakdownCard wine={wine}/>
        <FieldsButtons onClick={onClick} lotCode={wine.lotCode}/>
        <BreakdownTable calculatedBreakdown={calculatedBreakdown}/>
        </div>
        

    )
}

export default DisplayHeader