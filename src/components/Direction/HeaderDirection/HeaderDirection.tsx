import styles from './header-dir.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export type Props = {
  location: string;
}


export default function HeaderDirection({ location }: Props) {
  const [ title, setTitle ] = useState<string>('');

  useEffect(() => {
    if(location === '/') {
      setTitle('Чаты');
    }
    else if(location === '/status') {
      setTitle('Статус');
    }
    else if(location === '/community') {
      setTitle('Сообщества');
    }
    else if(location === '/setting') {
      setTitle('Настройки');
    }
    else if(location === '/account') {
      setTitle('Профиль');
    }
  }, [location]);

  return (
    <header className={`${styles.header} ${location === '/add-chat' ? styles.header_display : ''}`}>
      
      <h2 className={styles.title}>{title}</h2>
      
      <div 
        className={`${styles.container} ${location !== '/' && location !== '/status' ? 
          styles.container_invisible : ''}`}>
        {
          location === '/' ? (
            <Link to="/add-chat" className={styles.link}></Link>
          ) : (
            <button className={styles.button__plus}></button>
          )
        }
        <button className={styles.button}></button>
      </div>

    </header>
  )
}