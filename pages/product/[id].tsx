import Image from "next/image"
import { useRouter } from "next/router";
import { MdShoppingCart } from "react-icons/md"
import useSWR from "swr";
import styles from '../../styles/Product.module.css'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  console.log(data)
  return data
}

const Product = () => {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/product/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image src={data.img} alt="banner" width={'100%'} height={'100%'} layout="responsive" />
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>{data.name}</h2>
          <div className={styles.detail}>
          Calça jogger em veludo. O modelo jogger é um clássico, que cada vez mais, ganha novos adeptos e modelos de calças. Seu tecido em veludo dá um ar muito charmoso à peça, dando um toque especial à roupa que é só dela.
          </div>  
          <p className={styles.price}>
            R$ {data.value}
            <span>{data.installment}s</span>
          </p>
          {data.stock === 0 
            ? 
              <p className={styles.soldOff}>Produto esgotado</p>
            :
              <button type="button" className={styles.button}>
                Comprar
                <MdShoppingCart size={22}/>
              </button>
          }
        </div>
      </div>
      <div className={styles.description}>
        <h3>DETALHES DO PRODUTO</h3>
        <p>Medidas do modelo:

          Altura: 1,88 m

          Tórax: 95 cm

          Cintura: 81 cm

          Modelo veste tamanho: M/40

          VERSATILIDADE DO FIT
          A calça jogger tem a modelagem um pouco mais soltinha do corpo e com a barra ajustada, tendo elástico ou amarração na cintura. O modelo que era mais utilizado para prática de esportes, vem ganhando cada vez mais espaço por todo seu conforto e versatilidade.

          O TECIDO QUE AMAMOS
          Elegante e a cara do inverno, o veludo é considerado um dos tecidos mais antigos do mundo e foi presença garantida entre os nobres. Acessível hoje aos meros mortais, segue sendo sinônimo de elegância e sofisticação, e está em alta há algumas temporadas. Versátil, aparece também nas opções cotelê - com aspecto canelado - e com efeito molhado.
        </p>
      </div>
    </div>
  )
}

export default Product