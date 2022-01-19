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
    },
    {
      imgName: 'card-2.png',
      score: 4.0,
      visiter: 4,
      country: 'USA',
      description: 'Learn wedding photography',
      price: 125,
    },
    {
      imgName: 'card-3.png',
      score: 3.0,
      visiter: 12,
      country: 'USA',
      description: 'Group Mountain Biking',
      price: 50,
    }

  ]
  return (
    <div className="container">
      <Nav></Nav>
      <main>
        <Hero></Hero>
        <div className="content">
          {
            mocks.map((mock, index) => {
              return <Card
                key={index}
                imgName={mock.imgName}
                score={mock.score}
                visiter={mock.visiter}
                country={mock.country}
                description={mock.description}
                price={mock.price}
              ></Card>
            })
          }
        </div>
      </main>

    </div>
  )
}

export default App
