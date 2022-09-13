import './styles/main.css'
import Logo from './assets/Logo.svg'
import { MagnifyingGlassPlus } from 'phosphor-react'

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
        <img src={Logo} />

        <h1 className='text-6xl text-white font-black mt-20'>
            Seu <span className='text-transparent bg-clip-text bg-gradientDuo'>duo</span> está aqui.
        </h1>

        <div className='grid grid-cols-6 gap-6 mt-16 '>
          <a href='' className='relative rounded-lg overflow-hidden'>
              <img src='./src/assets/g1.png' />
              <div className='w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0 rounded-lg'>
                <strong className='font-bold text-white block'>League of Legends</strong>
                <span className='text-zinc-300 text-sm'>4 anúncios</span>
              </div>
          </a>
          <a href='' className='relative rounded-lg overflow-hidden'>
              <img src='./src/assets/g2.png' />
              <div className='w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0 rounded-lg'>
                <strong className='font-bold text-white block'>Dota 2</strong>
                <span className='text-zinc-300 text-sm'>2 anúncios</span>
              </div>
              
          </a>
          <a href='' className='relative rounded-lg overflow-hidden'>
              <img src='./src/assets/g3.png' />
              <div className='w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0 rounded-lg'>
                <strong className='font-bold text-white block'>CS:GO</strong>
                <span className='text-zinc-300 text-sm'>5 anúncios</span>
              </div>
              
          </a>
          <a href='' className='relative rounded-lg overflow-hidden'>
              <img src='./src/assets/g4.png' />
              <div className='w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0 rounded-lg'>
                <strong className='font-bold text-white block'>Apex Legends</strong>
                <span className='text-zinc-300 text-sm'>3 anúncios</span>
              </div>
          </a>
          <a href='' className='relative rounded-lg overflow-hidden'>
              <img src='./src/assets/g5.png' />
              <div className='w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0 rounded-lg'>
                <strong className='font-bold text-white block'>Fortnite</strong>
                <span className='text-zinc-300 text-sm'>3 anúncios</span>
              </div>
          </a>
          <a href='' className='relative rounded-lg overflow-hidden'>
              <img src='./src/assets/g6.png' />
              <div className='w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0 rounded-lg'>
                <strong className='font-bold text-white block'>World of Warcraft</strong>
                <span className='text-zinc-300 text-sm'>80 anúncios</span>
              </div>
          </a>
        </div>
        <div className='bg-gradientDuo self-stretch rounded-lg pt-1.5 mt-8 overflow-hidden'>
          <div className='bg-[#2A2634] py-6 px-8 flex justify-between items-center'>
              <div>
                  <strong className='font-black text-white text-2xl block'>Não encontrou seu duo?</strong>
                  <span className=' text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
              </div>
              <button className='px-4 py-3 bg-violet-500 text-white rounded-md hover:bg-violet-600 flex items-center gap-3'>
                <MagnifyingGlassPlus size={24} /> 
                  Publicar Anúncios
              </button>
          </div>
        </div>
    </div>
  )
}

export default App