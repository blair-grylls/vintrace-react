import BreakdownComponent from './BreakdownComponent'
import { FaLongArrowAltDown } from 'react-icons/fa'

/**
 * This component is a table and dynamically fills each row with BreakdownComponent components 
 */
const BreakdownTable = ({ calculatedBreakdown }) => {
    const breakdownType = calculatedBreakdown.breakdownType.join("-") // turns field list into string
    const showMore = () => {
        alert("Clicked")
    }

    return (
        <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-white">
                            <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {breakdownType}
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right">
                                Percentage
                            </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            { calculatedBreakdown.breakdown.map((breakdownComponent) => (
                                <BreakdownComponent key={breakdownComponent.key} breakdownComponent={breakdownComponent}/>   
                                ))}
                        </tbody>
                        </table>
                        <div class="py-1"></div>
                        <nav class="space-y-1 flex justify-center bg-white" aria-label="Sidebar">
                            <a href="#" class="text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md" aria-current="page" onClick={() => showMore()}>
                                <span class="truncate">
                                Show more
                                </span>
                                <FaLongArrowAltDown />
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreakdownTable
