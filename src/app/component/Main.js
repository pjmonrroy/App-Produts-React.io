import React from 'react'
import Image from 'next/image'
import hamburger from '../../../public/icons8-hamburger-32.png'
import styles from '../page.module.css'

function Main() {
  return (
    <main className={styles.main}>
        <section className={styles.containerMain}>
                <section className={styles.boxA1}>
                    <aside className={styles.boxDigi}>
                        <picture className={styles.one}>
                            <Image
                                src={hamburger}
                                alt='logo'>
                            </Image>
                        </picture>
                        <div className={styles.two}>
                            <Image
                                src={hamburger}
                                alt='logo'>
                            </Image>
                        </div>
                        <div className={styles.three}>
                            <Image
                                src={hamburger}
                                alt='logo'>
                            </Image>
                        </div>
                    </aside>
                    <aside className={styles.boxSubtitle}>
                        <span>Digital products</span>
                        <a href="">{'>'}</a>
                    </aside>
                </section>
                <section className={styles.boxA2}>
                    <aside className={styles.boxDigi}>
                        <picture className={styles.one}>
                            <Image
                                src={hamburger}
                                alt='logo'>
                            </Image>
                        </picture>
                        <div className={styles.two}>
                            <Image
                                src={hamburger}
                                alt='logo'>
                            </Image>
                        </div>
                        <div className={styles.three}>
                            <Image
                                src={hamburger}
                                alt='logo'>
                            </Image>
                        </div>
                    </aside>
                    <aside className={styles.boxSubtitle}>
                        <span>Digital products</span>
                        <a href="">{'>'}</a>
                    </aside>
                </section>
                <section className={styles.boxA3}>
                    <aside className={styles.boxDigi}>
                        <picture className={styles.one}>
                            <Image
                                src={hamburger}
                                alt='logo'>
                            </Image>
                        </picture>
                        <div className={styles.two}>
                            <Image
                                src={hamburger}
                                alt='logo'>
                            </Image>
                        </div>
                        <div className={styles.three}>
                            <Image
                                src={hamburger}
                                alt='logo'>
                            </Image>
                        </div>
                    </aside>
                    <aside className={styles.boxSubtitle}>
                        <span>Digital products</span>
                        <a href="">{'>'}</a>
                    </aside>
                </section>
            </section>
            <section>
                <div>
                    <span>Recente expense</span>
                    <p>$168.02</p>
                </div>
            </section>

    </main>
  )
}
export { Main };
