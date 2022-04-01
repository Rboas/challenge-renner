import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CardProduct from '@components/CardProduct'
import { MdShoppingCart } from 'react-icons/md';
import CarouselProduct from '@components/CarouselProduct'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <Image src="/banner.webp" alt="banner" width={1391} height={403} />
        </div>
        <CarouselProduct />
      </main>
    </div>
  )
}

export default Home
