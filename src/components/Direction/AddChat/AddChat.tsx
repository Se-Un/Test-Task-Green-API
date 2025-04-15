import Search from '@/components/Search/Search';
import styles from './add.module.scss';
import { Link } from 'react-router-dom';
import { contactsData } from '@/utils/constants';
import ListContacts from '@/components/ListContacts/ListContacts';


export default function addChat() {

  const sortedByNamedata = contactsData.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  return (
    <section className={styles.addChat}>
      <header className={styles.addChat__header}>
        <Link className={styles.link} to='/'>&#10235;</Link>
        <h3 className={styles.title}>Добавить чат</h3>
      </header>

      <Search />

      <button className={styles.button} >Добавить контакт</button>

      <ListContacts type='contact' data={sortedByNamedata} />
    </section>
    
  )
}