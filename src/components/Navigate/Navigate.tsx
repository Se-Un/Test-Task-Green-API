import styles from './navigate.module.scss';
import { linkToSideBar } from '@utils/constants';

export default function Navigate() {

  return (

      <nav className={styles.navigate}>
        
        <ul className={styles.list}>
          
          {
            linkToSideBar.map((i) =>
              i.type === 'nav' && (
                <li className={styles.item} key={i.image}>
                  <a className={styles.link} href={i.link}>
                    <img className={styles.icon} src={i.image} alt="Icon" />
                  </a>
                  <span className={styles.clue}>{i.text}</span>
                </li>
            ))
          }

        </ul>

        <ul className={styles.list}>
          
          {
            linkToSideBar.map((i) =>
              i.type === 'set' && (
                <li className={`${styles.item} ${styles.item_set}`} key={i.image}>
                  <a className={styles.link} href={i.link}>
                    <img className={styles.icon} src={i.image} alt="Icon" />
                  </a>
                  <span className={styles.clue}>{i.text}</span>
                </li>
            ))
          }

        </ul>
       
      </nav>
  )
}