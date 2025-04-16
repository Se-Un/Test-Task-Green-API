import React from 'react';
import styles from './direction.module.scss';
import HeaderDirection from './HeaderDirection/HeaderDirection';

type Props = {
  children: React.ReactNode;
  path: string;
}

export default function Direction({children, path}: Props) {
  return (
    <main className={styles.direction}>
      <HeaderDirection location={path} />
      {
        children
      }
    </main>
  )
}