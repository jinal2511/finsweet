import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>

      <Header />
      <div className='Banner'>
        <Banner />
      </div>

    </div>

  )
}
