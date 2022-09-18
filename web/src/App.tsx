import './styles/main.css'
import Carousel from './components/Carousel'
import MessageBox from './components/MessageBox'
import Logo from './components/Logo'

import * as Dialog from '@radix-ui/react-dialog';

import CreateAdsModal from './components/Modal/CreateAdsModal'

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
          <CreateAdsModal />
        </Dialog.Root>
    </div>
  )
}

export default App