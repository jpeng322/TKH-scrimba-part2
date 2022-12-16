import Data from "./separate"
import Header from "./components/Header"
import Card from "./components/Card"
import './App.css'

function App() {

  console.log(Data)
  return (
    <>
      <Header />
      <div className="card-container">
     {Data.map(card => 
          <Card
            title={card.title}
            location={card.location}
            url={card.googleMapsUrl}
            startDate={card.startDate}
            endDate={card.endDate}
            description={card.description}
            imageUrl={card.imageUrl} />)}
      </div>
    </>
  )
}

export default App
