import styles from './filter.module.scss';
import { selectItems } from '@/utils/constants';
import { useState } from 'react';

export default function Filter() {
  const [ select, setSelect ] = useState<string>(selectItems[0].filter);

  function handleSelect(filter: string) {
    if(select !== filter) {
      setSelect(filter);
    } else {
      setSelect('');
    }
  }

  return (
    <section className={styles.filter}>
      {
        selectItems.map((item) => (
          <button 
            className={`${styles.button} ${select === item.filter ? styles.button_active : ''}`} 
            onClick={() => handleSelect(item.filter)} 
            key={item.text}
            >
            {item.text}
          </button>
        ))
      }
    </section>
  )
}