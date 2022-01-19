import Star from '/images/star.png'

export default function Card({ item }) {

   let badgeText = ""
   if (item.remain <= 0) {
      badgeText = "SOLD OUT"
   } else if (item.location === "ONLINE") {
      badgeText = "ONLINE"
   }

   return (
      <div className="card">
         {badgeText && <div className="card-badge">{badgeText}</div>}
         <img src={`/images/${item.imgName}`} alt="" className="card-img" />
         <div className="card-header">
            <img src={Star} alt="" className="card-star" />
            <span>{item.score}</span>
            <span className="gray">({item.visiter}) •</span>
            <span className="gray"> {item.country} </span>
         </div>
         <div className="gray card-text">
            <p>{item.description}</p>
            <p>
               <span className="bold ">
                  From {item.price} &nbsp;
               </span>
               / person</p>
         </div>
      </div>
   )
} 