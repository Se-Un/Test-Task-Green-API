import styles from './search.module.scss';

export default function Search() {
  return (
    <search className={styles.search}>

      <form action="" className={styles.form}>
        <button className={styles.button} type="button"></button>
        <input className={styles.input} type="search" name="search" id="search" />
      </form>

    </search>
  )
}