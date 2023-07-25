import React from 'react'
import Image from 'next/image'
import lupa from '../../../public/icons8-lupa.svg'
import menu from '../../../public/icons8-menú.svg'
import styles from '../page.module.css'

function Header() {
    return (
        <div className={styles.containerHeader}>
            <section className={styles.boxGreating}>
                <p>Hi User 👍</p>
                <h1>Welcome back</h1>
            </section>
            <section className={styles.boxMenu}>
                <picture>
                    <Image
                    src={menu}
                    className={styles.iconMenu}
                    alt='menu'>

                    </Image>
                </picture>
            </section>
            <label htmlFor='' className={styles.boxInput}>
                <Image
                    src={lupa}
                    className={styles.lupa}
                    alt='lupa'>

                </Image>
                <input type="search" id="search" className={styles.search} placeholder="Search"></input>
            </label>
        </div>
    )
}

export { Header };