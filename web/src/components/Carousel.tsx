import Card from './Card';
import api from '../services/api';

import { useEffect, useState } from 'react';

export interface GamesProps {
    bannerURL: string
    id: string
    title: string
    _count: {
        ads: number
    }
}

export default function Carousel () {
    
    const [gamesList, setGamesList] = useState<GamesProps[]>([]);


    useEffect(() => {
        api.get('/games').then( response => {
            const json = response.data;
            setGamesList(json);
        })
    }, []);

    return (
        <div className='grid grid-cols-6 gap-6 mt-16 '>
          {
          gamesList?.map((game) => {
            return <Card key={game.id} bannerURL={game.bannerURL} title={game.title} adsCount={game._count.ads} />
          })
          }
        </div>
    )
}