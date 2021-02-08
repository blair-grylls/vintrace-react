
const FieldsButtons = ({ onClick, lotCode, fields}) => {
    console.log(lotCode)
    const selectedClass = "border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
    const nonSelectedClass = "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"

    return (
        <div>
            <div class="hidden sm:block">
                <div class="border-b border-gray-200">
                <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                    <a href="#" class={fields[0] ? selectedClass : nonSelectedClass} onClick={() => onClick([true,false,false,false],"year",lotCode)}>
                    Year
                    </a>
                    <a href="#" class={fields[1] ? selectedClass : nonSelectedClass} onClick={() => onClick([false,true,false,false],"variety",lotCode)}>
                    Variety
                    </a>
                    <a href="#" class={fields[2] ? selectedClass : nonSelectedClass} onClick={() => onClick([false,false,true,false],"region",lotCode)}>
                    Region
                    </a>
                    <a href="#" class={fields[3] ? selectedClass : nonSelectedClass} onClick={() => onClick([false,false,false,true],"year-variety",lotCode)}>
                    Year & Variety
                    </a>
                </nav>
                </div>
            </div>
        </div>
    )
}

export default FieldsButtons
