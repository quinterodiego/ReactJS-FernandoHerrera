import { Link } from 'react-router-dom'

const CharactersByHero = ({ alter_ego, characters}) => {
  
  return ( alter_ego === characters )
   ? <></>
   : <p>{ characters }</p>;
}

export const HeroCard = (heroe) => {
  const {id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = heroe

  const heroImage = `/assets/heroes/${id}.jpg`

  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4 animate__animated animate__fadeIn">
            <img src={heroImage} alt={superhero} className="card-img" />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p><p className="card-text">{publisher}</p>
              <CharactersByHero characters={ characters } alter_ego={ alter_ego } />
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}>
                Más...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
