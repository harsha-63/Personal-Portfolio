import React from 'react'
import NavbarPage from './navbar/page'
import Contact from './contact/page'
import About from './about/page'
import Projects from './projects/page'
import SkillsPage from './skills/page'

function Page() {
  return (
    <div className='text-6xl'>  
      <NavbarPage />
      <About/>
      <SkillsPage/>
      <Projects />
      <Contact />
    </div>
  )
}

export default Page