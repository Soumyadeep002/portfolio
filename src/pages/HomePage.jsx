import React from 'react'
import Banner from '../components/Banner'
import About from '../components/About'
import Services from '../components/Services'
import Education from '../components/Education'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
export default function HomePage() {
  return (
    <main>
        <Banner/>
    {/* <!-- About Us --> */} 
        <About/>
    {/* <!-- End About Us -->
    <!-- Services --> */}
        <Services/>
    {/* <!-- End Services -->
    <!-- Education --> */}
        <Education/>
    {/* <!-- End Education -->
    <!-- Portfolio --> */}
        <Portfolio/>
    {/* <!-- End Portfolio -->
    <!-- Contact --> */}
        <Contact/>
</main>
  )
}
