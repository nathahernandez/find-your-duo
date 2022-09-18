import * as Select from '@radix-ui/react-select'
import { CaretDown } from 'phosphor-react'
import SelectionItem from './SelectionItem'
import api from '../../services/api'
import { useState, useEffect } from 'react'
import { GamesProps } from '../Carousel'

interface SelectionProps {
    setGame : (event : string) => void
    setGameID: (event: string) => void
}

export default function Selection ( {setGame, setGameID} : SelectionProps) {

    const [Games, setGames] = useState<GamesProps[]>()

    function needContextApi (event: string) {
        setGame(event)
        Games && Games.filter( (game) => game.title === event ? setGameID(game.id) : null)
    }

    useEffect(()=>{
        api.get('/games')
        .then(response => setGames(response.data))
    }, [])

    return (
        <Select.Root onValueChange={needContextApi}>
            <Select.Trigger className='
                                        flex 
                                        row 
                                        justify-between
                                        items-center
                                        rounded
                                        py-3 px-4
                                        hover:opacity-80
                                        bg-zinc-900
                                        over' 
                            aria-label='Games'
            >

                <Select.Value className='text-zinc-500' placeholder='Selecione o game que deseja jogar' />

                <Select.Icon>
                    <CaretDown size={24} />
                </Select.Icon>

            </Select.Trigger>

            <Select.Portal>
                
                <Select.Content className='overflow-hidden'>         
                    <Select.Viewport>
                        
                            <Select.Group className='bg-zinc-900 text-white rounded'>
                                { Games && Games.map( game => <SelectionItem key={game.id} name={game.title} /> ) }
                            </Select.Group>
                        
                    </Select.Viewport>
                </Select.Content>
                

            </Select.Portal>
        </Select.Root>

    )
}