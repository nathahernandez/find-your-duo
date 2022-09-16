import Card from './Card';

export default function Carousel () {
    return (
        <div className='grid grid-cols-6 gap-6 mt-16 '>
          <Card bannerURL='./src/assets/g1.png' title='League of Legends' adsCount={4} />
          <Card bannerURL='./src/assets/g2.png' title='League of Legends' adsCount={4} />
          <Card bannerURL='./src/assets/g3.png' title='League of Legends' adsCount={4} />
          <Card bannerURL='./src/assets/g4.png' title='League of Legends' adsCount={4} />
          <Card bannerURL='./src/assets/g5.png' title='League of Legends' adsCount={4} />
          <Card bannerURL='./src/assets/g6.png' title='League of Legends' adsCount={4} />
        </div>
    )
}