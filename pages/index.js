import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

import styles from '../styles/Home.module.css'
import Features from './Features'
import Project from './Project'
import Work from './Work'

export default function Home() {
  return (
    <div>

      <Header />
      <div className='Banner'>
        <Banner />
      </div>
      <div className='Work'>
        <Work />
      </div>
      <div className='Project'>
        <Project />
      </div>
      <div className='Features'>
        
      <Features />
      </div>

    </div>

  )
}
