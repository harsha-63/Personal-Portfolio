import React from 'react'
import NavbarPage from './navbar/page'
import Contact from './contact/page'

function Page() {
  return (
    <div className='text-6xl'>  
      <NavbarPage />
      <Contact />
    </div>
  )
}

export default Page