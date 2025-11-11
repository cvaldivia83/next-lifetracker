"use client"

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode, faStar, faUser } from "@fortawesome/free-regular-svg-icons";
import { faDumbbell, faBook, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  function handleMobileMenu() {
    setMobileMenu((prevMobile) => !prevMobile);
  }
  

  return (
    <header className={styles.header}>
      <Link href="/" aria-label="home">
        <FontAwesomeIcon icon={faStar} className={styles.headerIcon} aria-hidden={true} />
      </Link>

      <button onClick={handleMobileMenu} aria-label="Toggle menu" className={styles.mobileButton}>
        <FontAwesomeIcon icon={mobileMenu ? faXmark : faBars} className={`${styles.headerIcon} ${styles.mobileBars}`} />
      </button>

      <nav className={styles.headerNav}>
        <ul className={`${styles.headerList} ${mobileMenu ? styles.openMenu : ''}`}>
          <li className={styles.headerList__item}>
            <Link href="/" className={styles.headerList__link}>
              <FontAwesomeIcon icon={faFileCode} className={`${styles.listItem__icon} ${styles.jobIcon}`} aria-hidden={true} />
              Jobs
            </Link>
          </li>
          <li className={styles.headerList__item}>
            <Link href="/" className={styles.headerList__link}>
              <FontAwesomeIcon icon={faBook} className={`${styles.listItem__icon} ${styles.studyIcon}`} aria-hidden={true} />
              Study
            </Link>
          </li>
          <li className={styles.headerList__item}>
            <Link href="/" className={styles.headerList__link}>
              <FontAwesomeIcon icon={faDumbbell} className={`${styles.listItem__icon} ${styles.sportIcon}`} aria-hidden={true} />
              Sports
            </Link>
          </li>
          <li className={styles.headerList__item}>
            <Link href="/" className={styles.headerList__link}>
              <FontAwesomeIcon icon={faUser} className={`${styles.listItem__icon} ${styles.userIcon}`} aria-hidden={true} />
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )

}

export default Header;