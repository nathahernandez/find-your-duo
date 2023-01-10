import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import { FormEvent, useState } from 'react'

import { GameController, Check } from 'phosphor-react'

import Input from '../Form/Input'
import Selection from './Selection'
import WeekDays from '../Form/WeekDays'
import api from '../../services/api'

export default function CreateAdsModal () {

	async function handleCreateAd (event : FormEvent) {
		event.preventDefault()

		const formData = new FormData(event.target as HTMLFormElement)
		const data = Object.fromEntries(formData)
		const { name, yearsPlaying, discord, hourStart, hourEnd } = data
		const weekDays = days.map(day => Number(day))

		const Ad = {
			name,
			yearsPlaying: Number(yearsPlaying),
			discordUser: discord,
			hourStart,
			hourEnd,
			weekDays,
			useVoice
		}
		console.log(Ad)

		if(name){
			try{
				await api.post(`/games/${gameID}/ads`, Ad)
				console.log('enviou')
			}
			catch (err) {
				console.log(err)
			}
		}




	}
	const [useVoice, setUseVoice] = useState<boolean>()
	const [days, setDays] = useState<string[]>([])
	const [ selectedGame, setSelectedGame ] = useState<string>('')
	const [ gameID , setGameID ] = useState<string>('')
	const setWeekDays = (event : []) => setDays(event)
	const setGame = (event : string) => setSelectedGame(event)
	const funGameID = (event: string) => setGameID(event)

	return (
		<Dialog.Portal>

			<Dialog.Overlay className='fixed
                                     bg-black/60
                                       inset-0' />

			<Dialog.Content className='fixed
                                     bg-[#2A2634]
                                       py-8 px-10
                                     text-white
                                       top-1/2
                                       left-1/2
                                       -translate-x-1/2
                                       -translate-y-1/2
                                       shadow-lg
                                       shadow-black
                                       rounded-lg'>
				<Dialog.Title className='text-[32px] font-black'>
                Publique um anúncio
				</Dialog.Title>
				<form onSubmit={handleCreateAd} className='my-8'>

					<div className='flex flex-col gap-2'>
						<label htmlFor='name' className='font-semibold'>Qual o game?</label>
						<Selection setGameID={funGameID} setGame={setGame} />
					</div>

					<div className='flex flex-col gap-2 mt-4'>
						<label htmlFor='name'>Seu nome (ou nickname)</label>
						<Input
							name='name'
							type='text'
							placeholder='Selecione o Game que deseja jogar'
						/>
					</div>

					<div className='grid grid-cols-2 gap-6 mt-4'>
						<div className='flex flex-col gap-2'>
							<label htmlFor='yearsPlaying'>Joga há quantos anos?</label>
							<Input name='yearsPlaying' type='text' placeholder='Tudo bem ser ZERO' />
						</div>
						<div className='flex flex-col gap-2'>
							<label htmlFor='yearsPlaying'>Qual seu Discord?</label>
							<Input name='discord' type='text' placeholder='Usuario#0000' />
						</div>
					</div>

					<div className='flex gap-2 row'>
						<div className='flex flex-col gap-2 mr-3'>
							<label htmlFor='WeekDays'>Quando costuma jogar?</label>
							<div className='flex flex-row items-start gap-2 w-54 h-10 flex-grow-0'>
								<WeekDays days={days} fun={setWeekDays} name='weekdays' />
							</div>
						</div>
						<div className='flex flex-col gap-2'>
							<label htmlFor='yearsPlaying'>Qual horário do dia?</label>
							<div className='grid grid-cols-2 gap-2'>
								<input name='hourStart' type='time' alt='De' className=' w-20 h-10 bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500' />
								<input name='hourEnd' type='time' alt='Até' className='w-20 h-10 bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500' />
							</div>
						</div>
					</div>

					<label className='flex items-center flex-row gap-2 mt-4 text-sm'>

						<Checkbox.Root
							onCheckedChange={(checked) => {
								if(checked === true){
									setUseVoice(true)
								}else{
									setUseVoice(false)
								}
							}}
							className='flex justify-center col bg-zinc-900 w-6 h-6 p-1 rounded'>
							<Checkbox.Indicator>
								<Check color='#34D399' size={16}/>
							</Checkbox.Indicator>
						</Checkbox.Root>
                      Costumo me conectar ao chat de voz
					</label>
					<footer className='mt-4 flex justify-end gap-6'>

						<Dialog.Close className='flex justify-center items-center py-3 px-5 bg-zinc-500 rounded-md'>
                            Cancelar
						</Dialog.Close>

						<button type='submit' className='flex items-center py-3 px-5 gap-3 bg-violet-500 rounded-md'>
							<GameController size={24} />
                            Encontrar duo
						</button>
					</footer>
				</form>

			</Dialog.Content>
		</Dialog.Portal>
	)
}