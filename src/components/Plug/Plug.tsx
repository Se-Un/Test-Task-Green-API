import styles from './plug.module.scss';

type Props = {
  image: string;
}

export default function Plug({image}: Props) {


  return (
    <section 
      className={styles.plug} 
      style={{ backgroundImage: `url(${image})`}}>
      <h2 className={styles.title}>Данный раздел находится в разработке</h2>
    </section>
  )
}