import axios from 'axios'
import { useState } from 'react'
import SearchHeader from './components/SearchHeader'
import DisplayHeader from './components/DisplayHeader'

function App() {
  const [wines, setWines] = useState([])

  const [wine, setWine] = useState([])

  const [calculatedBreakdown, setCalculatedBreakdown] = useState([])

  const [searchText, setSearchText] = useState('')

  const [displayHidden, setDisplayHidden] = useState(true)

  // Load wine
  const loadWine = (fields,lotCode) => {
    console.log({fields}, {lotCode})
    axios.get(`http://localhost:1995/api/breakdown/${fields}/${lotCode}`)
            .then( res => {
                setWine(wines.find((wine) => wine.lotCode === lotCode))
                setCalculatedBreakdown(res.data.breakdownResult)
                setDisplayHidden(false)
      })
  }

  // Delete text
  const deleteText = () => {
    console.log('deleting')
    setSearchText('')
    setWines([])
  }

  /**
   * Takes in searchText and queries API for wines/breakdowns that have a matching lotCode or description. Returns list of wines and calls setWines
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
      <div class="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 bg-gray-500">
        <div class="max-w-3xl mx-auto bg-gray-100">
          <SearchHeader onLoad={loadWine} onDelete={deleteText} onSearch={searchWines} wines={wines} searchText={searchText}/>
        </div>
      </div>
    );
  }
  return (
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <DisplayHeader wine={wine} calculatedBreakdown={calculatedBreakdown} onBack={setDisplayHidden} onClick={loadWine}/>
      </div>
    </div>
  );
  
}

export default App;




