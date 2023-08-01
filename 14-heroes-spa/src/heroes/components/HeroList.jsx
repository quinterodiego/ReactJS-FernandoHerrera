import { useMemo } from 'react';
import getHeroesbyPublisher from './../helpers/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesbyPublisher(publisher), [publisher])

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-2'>
            {
                heroes.map(hero => (<HeroCard hero={hero} key={hero.id}/>))
            }
        </div>
    )
}
