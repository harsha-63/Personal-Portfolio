import React from 'react'
import NavbarPage from './navbar/page'
import Contact from './contact/page'
import About from './about/page'

function Page() {
  return (
    <div className='text-6xl'>  
      <NavbarPage />
      <About/>
      <Contact />
    </div>
  )
}

export default Page