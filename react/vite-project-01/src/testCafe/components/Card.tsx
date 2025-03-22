import { Elementos } from "../declarations/Elementos"

const Card = ({ elemento }:
    { elemento: Elementos }
) => {

    const valorImg = {
        backgroundImage: `url(${elemento.image})`,
    }

    return (
        <div className="card" key={elemento.id}>
            <div className="tarjetaHeader" style={valorImg}>
                <div className="popular">{elemento.popular ? 'Popular' : ''}</div>
            </div>
            <div className="tarjetaFooter">
                <div className="description">
                    <h3 className="productName">{elemento.name}</h3>
                    <div className="price">{elemento.price}</div>
                </div>
                <div className="start">
                    <div className="points">
                        <div className={elemento.rating != null ? 'imgstartFill' : 'imgstart'}></div>
                        <div className="votes">({elemento.votes} votes)</div>
                    </div>
                    <div className="soldOut">{elemento.votes != 0 ? `(${elemento.votes} votes)` : 'No ratings'}</div>
                </div>
            </div>
        </div>
    )
}

export default Card