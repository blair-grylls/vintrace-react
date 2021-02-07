/**
 * This component is a percentage and unique grouping. It is looped by BreakdownTable.
 */
const BreakdownComponent = ({ breakdownComponent }) => {
    console.log({breakdownComponent})
    return (
        <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {breakdownComponent.key}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">
                {breakdownComponent.percentage}%
            </td>
        </tr>
    )
}

export default BreakdownComponent
