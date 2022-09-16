interface CardProps {
    title: string
    bannerURL: string
    adsCount: number
}

export default function Card ({title, bannerURL, adsCount} : CardProps) {

    return (
        <a href='' className='relative rounded-lg overflow-hidden'>
              <img src={bannerURL} />
              <div className='w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0 rounded-lg'>
                <strong className='font-bold text-white block'>{title}</strong>
                <span className='text-zinc-300 text-sm'>{adsCount} anúncio(s)</span>
              </div>
        </a>
    )
}