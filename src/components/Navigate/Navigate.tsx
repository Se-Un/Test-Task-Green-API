import styles from './navigate.module.scss';
import { NavLink } from 'react-router-dom';
import { linkToSideBar } from '@utils/constants';

export default function Navigate() {

  return (

      <nav className={styles.navigate}>
        
        <ul className={styles.list}>
          
          {
            linkToSideBar.map((i) =>
              i.type === 'nav' && (
                <li className={styles.item} key={i.image}>
                  <NavLink 
                    className={styles.link} 
                    to={i.link} 
                    style={({ isActive }) => {
                      return {
                        backgroundImage: isActive ? `url(${i.image2})` : `url(${i.image})`,
                      }
                    }}>
                  </NavLink>
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
                  <NavLink 
                    className={styles.link} 
                    to={i.link} 
                    style={({ isActive }) => {
                      return {
                        backgroundImage: isActive ? `url(${i.image2})` : `url(${i.image})`,
                      }
                    }}>
                  </NavLink>
                  <span className={styles.clue}>{i.text}</span>
                </li>
            ))
          }

        </ul>
       
      </nav>
  )
}