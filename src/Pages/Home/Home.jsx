import React from 'react'
import Row from '../../Components/Row/Row'
import Catergory from '../../Components/Catergory/Catergory'
import About from '../../Components/About/About'
import Banner from '../../Components/Banner/Banner'
import Contact from '../../Components/Contact/Contact'
import Services from '../../Components/Services/Services'

const Home = () => {

  return (
    <>
     <Banner/>
     <Row title="Featured"/>
     <Services/>
     <Catergory/>
     <About/>
     <Contact/>
     </>
  )
}

export default Home