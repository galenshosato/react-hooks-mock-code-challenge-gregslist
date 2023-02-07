import React,{ useState } from "react";


function ListingCard({listing, setListings}) {
  const [isFave, setIsFave] = useState(false)

  function handleClick (event) {
    setIsFave(prev => !prev)
  }

  function handleDelete(event) {
    setListings(prev => prev.filter(newListing => {
      return newListing.id !== listing.id
    }))

  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFave ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
