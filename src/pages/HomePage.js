import React, { useState } from 'react'
import Banner from '../component/Banner'
import Package from '../component/Package'
import TeamBox from '../component/TeamBox'
import Faq from '../component/Faq'
import Question from '../component/Question'
import EverNote from '../component/EverNote'
import Footer from '../component/Footer'
import Compare from '../component/Compare'
import Hero from '../component/Hero'
import Hero2 from '../component/Hero2'
import Hero3 from '../component/Hero3'
import Hero4 from '../component/Hero4'
import Hero5 from '../component/Hero5'
import Hero6 from '../component/Hero6'

export default function HomePage() {
  const [toggle,setToggle]=useState(false);
  console.log(toggle)
  return (
    <div>
      <Banner toggle={toggle} setToggle={setToggle}></Banner>
      <Hero></Hero>
      <Hero2></Hero2>
      <Hero3></Hero3>
      <Hero4></Hero4>
      <Hero5></Hero5>
      <Hero6></Hero6>
      <Package></Package>
      <TeamBox></TeamBox>
      <Question></Question>
      <EverNote></EverNote>
      <Footer></Footer>
    </div>
  )
}
