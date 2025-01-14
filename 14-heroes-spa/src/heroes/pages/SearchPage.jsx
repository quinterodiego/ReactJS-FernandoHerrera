import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import { getHeroesByName } from "../helpers/GetHeroesByName";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: ''
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if(searchText.trim().length <= 1) return;

    navigate(`?q=${searchText.toLowerCase().trim()}`);


  }

  return (
    <>
      <h1>Buscar</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscando...</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input 
              type="text"
              placeholder="Buscar un héroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2">Buscar</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          <div className="alert alert-primary" style={{ display: showSearch ? '' : 'none' }}>
            Busca un héroe
          </div>

          <div className="alert alert-danger" style={{ display: showError ? '' : 'none' }}>
            No hay coincidencias con <b>{ q }</b>
          </div>

          {
            heroes.map(hero => <HeroCard key={hero.id} hero={hero} />)
          }
          
        </div>
      </div>
    </>
  )
}
