import Star from '/images/star.png'

export default function Card({ imgName, score, visiter, country, description, price }) {

   return (
      <div className="card">
         <img src={`/images/${imgName}`} alt="" className="card-img" />
         <div className="card-header">
            <img src={Star} alt="" className="card-star" />
            <span>{score}</span>
            <span className="gray">({visiter}) •</span>
            <span className="gray"> {country} </span>
         </div>
         <div className="gray card-text">
            <p>{description}</p>
            <p>
               <span className="bold ">
                  From {price} &nbsp;
               </span>
               / person</p>
         </div>
      </div>
   )
} 