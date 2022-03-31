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
        <div className={styles.grid}>
          <CardProduct id={1} name='Jaqueta Pesada' img='/12.webp' value='329,90' installment='10x de R$ 32,99 s/juros'/>
          <CardProduct id={2} name='Camisa Slim' img='/13.webp' value='79,90' installment='4x de R$ 19,98 s/juros'/>
          <CardProduct id={3} name='Calça Joger' img='/14.webp' value='179,90' installment='10x de R$ 17,90 s/juros'/>
          <CardProduct id={4} name='Calça Joger em Sherpa' img='/15.webp' value='159,90' installment='9x de R$ 17,77 s/juros'/>
        </div>
      </main>
    </div>
  )
}

export default Home
