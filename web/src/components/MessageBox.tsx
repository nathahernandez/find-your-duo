import { MagnifyingGlassPlus } from 'phosphor-react'

export default function MessageBox () {
    return (
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
    )
}