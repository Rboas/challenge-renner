import Image from 'next/image'
import Link from 'next/link';
import { MdShoppingCart } from 'react-icons/md';
import styles from '../styles/CardProduct.module.css'

export interface CardProductProps {
  id: number;
  name: string;
  img: string;
  value: string;
  installment: string;
}

const CardProduct = (props: CardProductProps) => {
  return (
    <div className={styles.card}>
      <Image src={props.img} alt={props.name} width={292} height={338} />
      <div className={styles.info}>
        <h2>{props.name}</h2>
        <div className={styles.cardFooter}>
          <div className={styles.currency}>
            <p>R$ {props.value}</p>
            <span>{props.installment}</span>
          </div>
          <Link href={`/product/${props.id}`}>
            <button className={styles.button}>
              Comprar
              <MdShoppingCart size={22}/>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardProduct