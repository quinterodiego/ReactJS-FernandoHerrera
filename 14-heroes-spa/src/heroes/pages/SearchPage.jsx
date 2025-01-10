import { HeroCard } from "../components/HeroCard"

export const SearchPage = () => {
  return (
    <>
      <h1>Buscar</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscando...</h4>
          <hr />
          <form>
            <input 
              type="text"
              placeholder="Buscar un héroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
            />
            <button className="btn btn-outline-primary mt-2">Buscar</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          <div className="alert alert-primary">
            Busca un héroe
          </div>

          <div className="alert alert-danger">
            No hay coincidencias
          </div>

          <HeroCard hero={hero} />
        </div>
      </div>
    </>
  )
}
