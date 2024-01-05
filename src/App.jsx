import React from 'react'
import styles from './style'
import {Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonial,
Client, CTA , Footer} from './components'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <h1> hellow world</h1>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}> hero</div>
        </div>
        <div className={`bg-primary  ${styles.paddingX}${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
           
            <Hero/>
           <Stats/>
           <Business/>
           <Billing/>
           <CardDeal/>
           <Testimonial/>
           <CTA/>
           <Client/>
           <Footer/>
           </div>
        </div>
    </div>
  )
}

export default App