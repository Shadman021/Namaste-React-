import { API_URL } from "../util/config";
import { useState, useEffect} from 'react';


const Card = ({ info }) => {
 
  return (
    <div className="card">
     <img
  src={info.cloudinaryImageId}

        alt={info.name}
        style={{ width: "250px", height: "140px", borderRadius: "20px" }}
      />
      <div style={{ padding: "10px" }}>
        <h2>{info.name}</h2>
        <p>{info.cuisines?.join(", ")}</p>
        <p>Rating: {info.avgRating}</p>
        <p>Delivery Time: {info.sla?.deliveryTime} mins</p>
        <p>Price Range: {info.costForTwo}</p>
      </div>
    </div>
  )
}
export default Card;