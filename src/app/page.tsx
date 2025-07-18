import React from 'react'
import Contact from './contact/page'
import About from './about/page'
import Projects from './projects/page'
import SkillsPage from './skills/page'
import HeroPage from './hero/page'

function Page() {
  return (
    <div className='text-6xl'>  
      <HeroPage/>
      <About/>
      <SkillsPage/>
      <Projects />
      <Contact />
    </div>
  )
}

export default Page