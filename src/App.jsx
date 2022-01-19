import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'

function App() {
  const mocks = [
    {
      imgName: 'card-1.png',
      score: 5.0,
      visiter: 4,
      country: 'USA',
      description: 'Life lessons with Katie Zaferes',
      price: 136,
      remain: 0,
      location: 'OFFLINE'
    },
    {
      imgName: 'card-2.png',
      score: 4.0,
      visiter: 4,
      country: 'USA',
      description: 'Learn wedding photography',
      price: 125,
      remain: 10,
      location: 'ONLINE'
    },
    {
      imgName: 'card-3.png',
      score: 3.0,
      visiter: 12,
      country: 'USA',
      description: 'Group Mountain Biking',
      price: 50,
      remain: 12,
      location: 'OFFLINE'
    }

  ]
  return (
    <div className="container">
      <Nav></Nav>
      <main>
        <Hero></Hero>
        <div className="card-list">
          {
            mocks.map((mock, index) => {
              return <Card
                key={index}
                item={mock}
              ></Card>
            })
          }
        </div>
      </main>

    </div>
  )
}

export default App
