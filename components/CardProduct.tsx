import Image from 'next/image'
import Link from 'next/link';
import { MdShoppingCart } from 'react-icons/md';
import styles from '../styles/CardProduct.module.css'

export interface CardProductProps {
  id: string;
  name: string;
  img: string;
  value: string;
  installment: string;
  stock: number;
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
          {props.stock === 0 
            ? 
              <p className={styles.soldOff}>Produto esgotado</p>
            :
              <button type="button" className={styles.button}>
                Comprar
                <MdShoppingCart size={22}/>
              </button>
          }
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardProduct