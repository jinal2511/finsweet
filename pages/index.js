import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

import styles from '../styles/Home.module.css'
import AboutUs from './AboutUs'
import Faq from './Faq'
import Features from './Features'
import Inquiry from './Inquiry'
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
      <div className='AboutUs'>
        <AboutUs />
      </div>
      <div className='Faq'>
        <Faq />
      </div>
      <div className='Inquiry'>
        <Inquiry />
      </div>

    </div>

  )
}
