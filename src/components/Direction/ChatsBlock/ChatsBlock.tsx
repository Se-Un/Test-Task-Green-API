import styles from './chats.module.scss';
import Search from '@/components/Search/Search';
import Filter from '@components/Filter/Filter';
import ListContacts from '@/components/ListContacts/ListContacts';
import { contactsData } from '@/utils/constants';



export default function ChatsBlock() {

  const timeToNumber = (time: string) => {
    const [hours, minutes] = time.split(':').map(num => parseInt(num.trim()));
    return hours * 60 + minutes;
  }; 

  const sortedData = contactsData.sort((a, b) => {    
    return timeToNumber(b.time) - timeToNumber(a.time);
  });
  

  return (
    <section className={styles.chats}>
      <Search />
      <Filter />
      <ListContacts type='element' data={sortedData} />
    </section>
  )
}