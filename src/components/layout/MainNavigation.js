import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Quotes</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to='/quotes' activeClassName={styles.active}>
              All quotes
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-quotes' activeClassName={styles.active}>
              Add quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
