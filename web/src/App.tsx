import './styles/main.css'
import Carousel from './components/Carousel'
import MessageBox from './components/MessageBox'
import Logo from './components/Logo'


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
        <MessageBox />
    </div>
  )
}

export default App