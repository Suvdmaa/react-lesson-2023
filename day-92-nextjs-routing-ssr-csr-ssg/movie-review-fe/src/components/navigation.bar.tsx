import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'



export default function NavigationBar(): JSX.Element {
  return (
    <div className={styles.navbarContainer}>
    <div className={styles.leftheader}>
        <img
          src='https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg'
          alt="logo"
          className={styles.logoTomatoes}
        />
      <div className={styles.inputHeader}>
        <input
          type='text'
          placeholder='Search movies, TV, actors, more...'
          className={styles.searchInput}
        />
      </div>
      <div className={styles.rightheader}>
        <div className={styles.topNavLink}>
          <Link href={""} className={styles.aSpace}>
            What's the Tomaotometer@?
          </Link>
          <Link href='/criticts' className={styles.aSpace}>
            Critics
          </Link>
          <Link href={''} className={styles.aSpace}>
            LOGIN/SIGNUP
          </Link>
        </div>
        <div className={styles.bottomNavLink}>
          <Link href={""} className={styles.aSpace}> MOVIES</Link>
          <Link href={""} className={styles.aSpace}>TV SHOWS</Link>
          <Link href={""} className={styles.aSpace}>MOVIE TRIVIA</Link>
          <Link href={""} className={styles.aSpace}>NEWS</Link>
          <Link href={""} className={styles.aSpace}>SHOWTIMES</Link>
        </div>
      </div>
    </div>
    <div className={styles.trendingNavbar}>
      <div>
        <p><span className={styles.trendingSpan}>TRENDING ON RT</span> The Super Mario Bros. Movie First Reviews</p>
      </div>
      <div>
    
      </div>
    </div>
    </div>
  )
}
