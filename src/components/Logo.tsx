import LogoImg from '../assets/Logo.svg'

export default function Logo (){
	return (
		<>
			<img src={LogoImg} />
			<h1 className='text-6xl text-white font-black mt-20'>
                Seu <span className='text-transparent bg-clip-text bg-gradientDuo'>duo</span> está aqui.
			</h1>
		</>
	)
}