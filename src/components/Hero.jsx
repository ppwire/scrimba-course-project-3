import HeroImg from '../images/hero-photo.png'
export default function Hero() {
   return (
      <section>
         <img src={HeroImg} alt="" className="hero-img" />
         <h1>
            Online Experience
         </h1>
         <p>
            Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
         </p>
      </section>
   )
}