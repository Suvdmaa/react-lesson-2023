import React from 'react'
import Link from 'next/link'
// import styles from '@/styles/navigation.css'
import styles from '@/styles/Home.module.css'

export default function NavigationBar(): JSX.Element {
  return (
    <div className={styles.mainheader}>
      <div className={styles.logoContainer}>
        <img
          src='https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg'
          className={styles.logoTomatoes}
        />
      </div>

      <div className={styles.inputHeader}>
        <button className={styles.searchButton}>
          {/* <img src='http://www.w3.org/2000/svg' className={styles.searchImg} /> */}
        </button>
        <input
          type='text'
          placeholder='Search movies, TV, actors, more...'
          className={styles.searchInput}
        ></input>
      </div>
      <div className={styles.sideHeader}>
        <div>
          <a href='/about#whatisthetomatometer' className={styles.aSpace}>
            What's the Tomaotometer@?
          </a>
          <a href='/criticts' className={styles.aSpace}>
            Critics
          </a>
          <a href='/login' className={styles.aSpace}>
            LOGIN/SIGNUP
          </a>
        </div>
        <div>
          <a className={styles.aSpace}> MOVIES</a>
          <a className={styles.aSpace}>TV SHOWS</a>
          <a className={styles.aSpace}>MOVIE TRIVIA</a>
          <a className={styles.aSpace}>NEWS</a>
          <a className={styles.aSpace}>SHOWTIMES</a>
        </div>
      </div>
    </div>
  )
}
