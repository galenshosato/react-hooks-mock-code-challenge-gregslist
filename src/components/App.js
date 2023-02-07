import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(resp => resp.json())
    .then(data => setListings(data))
  }, [])

  const filteredListings = listings.filter(listing => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch}/>
      <ListingsContainer listings={filteredListings} setListings={setListings}/>
    </div>
  );
}

export default App;
