import styles from './contacts.module.scss';

type Props = {
  type: 'contact' | 'element';
  data: {
    name: string;
    image: string;
    message: string;
    time: string;
    status?: string;
  }[];
}

export default function ListContacts({type, data}: Props) {
  return (
    <ul className={`${styles.list} ${type === 'contact' ? styles.list_gap : ''}`}>
        {
          data.map((item) => (
            <li className={styles.item}>

            <img className={styles.avatar} src={item.image} alt={item.name} />
            
            <div className={styles.container}>
      
              <h4 className={styles.name}>{item.name}</h4>

              <p className={`${type === 'contact' ? styles.status : styles.status_display}`}>{item.status}</p>
      
              <p className={`${styles.message} ${type === 'contact' ? styles.message_display : ''}`}>{item.message}</p>
      
            </div>
            
            <span className={`${styles.time} ${type === 'contact' ? styles.time_display : ''}`}>{item.time}</span>  
      
          </li>
          ))
        }
      </ul>
    
  )
}