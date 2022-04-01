import Image from 'next/image'
import Link from 'next/link';
import { MdShoppingCart } from 'react-icons/md';
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.content}>
        <Link href="/">
          <Image className={styles.logo} src="/logo_red3.webp" alt="Logo" width={176} height={36} />
        </Link>
        <div className={styles.userContent}>
            <span>Entre ou cadastre-se</span>
            <MdShoppingCart size={22} />
        </div>
      </div>
    </div>
  )
}

export default Header