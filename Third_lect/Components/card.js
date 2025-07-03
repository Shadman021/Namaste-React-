const Card = ({ info }) => {
  return (
    <div className="card">
      <img className="card-image"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.cloudinaryImageId}`}
        alt={info.name}
      />
      <div className="p-2.5 text-lg">
        <h2 className="text-2xl py-2 font-bold">{info.name}</h2>
        <p>Rating: {info.avgRating}</p>
        <p>Delivery Time: {info.sla?.deliveryTime} mins</p>
        <p>Price Range: {info.costForTwo}</p>
      </div>
    </div>
  )
}

export const EnhancedCard = (Card) => {
  return (props) => {
    return (
      <div>
        <div className="absolute bg-gray-400 text-white rounded-lg p-1 m-[10px]">
        <label >{props?.info?.aggregatedDiscountInfoV3?.header}</label>
        <label > {props?.info?.aggregatedDiscountInfoV3?.subHeader}</label>
        </div>
        <Card {...props}/>
      </div>
    )
  }
}
export default Card;