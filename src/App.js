import axios from 'axios'
import { useState } from 'react'
import SearchHeader from './components/SearchHeader'
import DisplayHeader from './components/DisplayHeader'

function App() {
  const [wines, setWines] = useState([]) // list of wine objects

  const [wine, setWine] = useState([]) // single wine object being displayed by displayHeader

  const [fields, setFields] = useState([true,false,false,false]) // single wine object being displayed by displayHeader

  const [calculatedBreakdown, setCalculatedBreakdown] = useState([]) // data for BreakdownTable

  const [searchText, setSearchText] = useState('') // input for searchWines function, filled by searchBar

  const [displayHidden, setDisplayHidden] = useState(true) // toggles which header is visible

  /**
   * This function calls the api to calulate the percentage breakdown, switches from searchHeader to displayHeader 
   * and updates the win and calclatedBreakdown props
   * @param {*} fields string to determine grouping {year-variety-region}
   * @param {*} lotCode unique identifier of the wine
   */
  const loadWine = (fieldsBool,fields,lotCode) => {
    console.log({fields}, {lotCode})
    axios.get(`http://localhost:1995/api/breakdown/${fields}/${lotCode}`)
            .then( res => {
                setWine(wines.find((wine) => wine.lotCode === lotCode))
                setCalculatedBreakdown(res.data.breakdownResult)
                setDisplayHidden(false)
                setFields(fieldsBool)
      })
  }

  /**
   * This function is called when the x in the search bar is clicked. It clears the search text and wine list.
   */
  const deleteText = () => {
    console.log('deleting')
    setSearchText('')
    setWines([])
  }

  /**
   * Takes in searchText and queries API for wines/breakdowns that have a matching lotCode or description. Returns list of wines and calls setWines.
   * @param {*} searchText 
   */
  const searchWines = (searchText) => {
    //console.log(searchText)
    axios.get(`http://localhost:1995/api/breakdown/search?text=${searchText}`)
            .then( res => {
                setWines(res.data.breakdowns)
                //console.log(res.data.breakdowns)
      })
    setSearchText(searchText)
  }

  if (displayHidden) {
    return (
      <div class="body">
        <div class="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto">
            <SearchHeader onLoad={loadWine} onDelete={deleteText} onSearch={searchWines} wines={wines} searchText={searchText}/>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div class="body">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
          <DisplayHeader fields={fields} wine={wine} calculatedBreakdown={calculatedBreakdown} onBack={setDisplayHidden} onClick={loadWine}/>
        </div>
      </div>
    </div>
  );
  
}

export default App;




