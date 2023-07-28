import getHeroesbyPublisher from './../helpers/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroes = getHeroesbyPublisher(publisher)

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-2'>
            {
                heroes.map(hero => (<HeroCard hero={hero} />))
            }
        </div>
    )
}
