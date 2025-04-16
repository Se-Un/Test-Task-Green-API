import styles from './addContact.module.scss';

export default function AddContact() {
  return (
    <form className={styles.addContact} action="">
      <input className={styles.name} type="text" />
      <input className={styles.number} type="number" />
      <button className={styles.button}>Coдать контакт</button>
    </form>
  )
}