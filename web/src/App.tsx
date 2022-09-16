import './styles/main.css'
import Carousel from './components/Carousel'
import MessageBox from './components/MessageBox'
import Logo from './components/Logo'
import Input from './components/Form/Input'
import WeekDays from './components/Form/WeekDays'

import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';

function App() {

  return (
    <div className='
            max-w-[1344px]
            mx-auto
            my-20
            flex
            flex-col
            items-center
            justify-center'
            >
        <Logo />
        <Carousel />

        <Dialog.Root>
          <MessageBox />
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
                 <form className='my-8'>

                    <div className='flex flex-col gap-2'>
                      <label htmlFor='name' className='font-semibold'>Qual o game?</label>
                      <Input 
                            id='name' 
                            type='text' 
                            placeholder='Selecione o Game que deseja jogar' 
                      />
                    </div>

                    <div className='flex flex-col gap-2 mt-4'>
                      <label htmlFor='name'>Seu nome (ou nickname)</label>
                      <Input 
                            type='text' 
                            placeholder='Selecione o Game que deseja jogar'
                       />
                    </div>

                    <div className='grid grid-cols-2 gap-6 mt-4'>
                      <div className='flex flex-col gap-2'>
                        <label htmlFor='yearsPlaying'>Joga há quantos anos?</label>
                        <Input type='text' placeholder='Tudo bem ser ZERO' />
                      </div>
                      <div className='flex flex-col gap-2'>
                        <label htmlFor='yearsPlaying'>Qual seu Discord?</label>
                        <Input type='text' placeholder='Usuario#0000' />
                      </div>
                    </div>

                    <div className='flex gap-6'>
                      <div className='flex flex-col gap-2'>
                        <label htmlFor='weekDays'>Quando costuma jogar?</label>
                        <div className='flex flex-row items-start gap-2 w-54 h-10 flex-grow-0'>
                          <WeekDays title='Segunda' content='S' />
                          <WeekDays title='Terça' content='T' />
                          <WeekDays title='Quarta' content='Q' />
                          <WeekDays title='Quinta' content='Q' />
                          <WeekDays title='Sexta' content='S' />
                        </div>
                      </div>
                      <div className='flex flex-col gap-2 flex-1'>
                        <label htmlFor='yearsPlaying'>Qual horário do dia?</label>
                        <div className='grid grid-cols-2 gap-2'>
                          <Input type='time' placeholder='De' />
                          <Input type='time' placeholder='Até' />
                        </div>
                      </div>
                    </div>

                    <div className='flex flex-row gap-2 mt-4 text-sm'>
                      <Input type="checkbox" name='useVoice' />
                      Costumo me conectar ao chat de voz
                    </div>

                 </form>

                 <footer className='mt-4 flex justify-end gap-6'>
                      
                      <Dialog.Close className='flex justify-center items-center py-3 px-5 bg-zinc-500 rounded-md'>
                        Cancelar
                      </Dialog.Close>
                      
                      <button className='flex items-center py-3 px-5 gap-3 bg-violet-500 rounded-md' type='submit'>
                        <GameController size={24} />
                        Encontrar duo
                      </button>
                 </footer>
              
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
    </div>
  )
}

export default App