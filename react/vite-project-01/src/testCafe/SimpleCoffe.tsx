import { useEffect, useState } from "react"
import Card from "./components/Card"
import "./style/style.css"
import { Elementos } from "./declarations/Elementos"

const SimpleCoffe = () => {

  const [elementos, setElementos] = useState<Array<Elementos>>([])

  const traerElementos = async () => {

    const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json')
    const data = await response.json()

    setElementos(data)
    console.log(data)
  }

  useEffect(() => {
    traerElementos()
  }, [])

  return (
    <main>
      <div className="collection-container">
        <div className="collection-content">
          <h2 className="collection-title">Our Collection</h2>
          <p className="collection-description">
            Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins,
            expertly roasted in small batches and shipped fresh weekly.
          </p>
          <div className="collection-buttons">
            <button className="btn primary">All Products</button>
            <button className="btn secondary">Available Now</button>
          </div>
        </div>
      </div>

      <div id="contenedor">
        {elementos.map(elemento => (
          <Card elemento={elemento} />
        ))}
      </div>

    </main>
  )
}

export default SimpleCoffe