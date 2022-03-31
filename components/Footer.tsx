import Image from "next/image"
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/logo_red3.webp" alt="Renner" width={100} height={18} />
          </span>
        </a>
      </footer>
  )
}

export default Footer