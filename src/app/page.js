import React from 'react'
import { Header } from './component/Header'
import styles from './page.module.css'
import { Main } from './component/Main'


export default function Home() {
  return (
    <div className={styles.root}>
      <Header />
      <Main />
    </div>
  )
}
