import React from 'react'
import styles from './rightbar.module.css'
import Image from 'next/image'
import {  MdPlayCircleFilled, MdReadMore } from 'react-icons/md'
const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg}/>
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥 Available Now </span>
          <h3 className={styles.title}>How to Dep Trai Giong Bao Kha</h3>
          <span className={styles.subtitle}>Danh 4 minutes de hoc</span>
          <p className={styles.desc}>
            Muon dep trai co gi sai ! Just do it
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        {/* <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg}/>
        </div> */}
        <div className={styles.texts}>
          <span className={styles.notification}>🔥 Available Now </span>
          <h3 className={styles.title}>How to Dep Trai Giong Bao Kha</h3>
          <span className={styles.subtitle}>Danh 4 minutes de hoc</span>
          <p className={styles.desc}>
            Muon dep trai co gi sai ! Just do it
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            Watch
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar   