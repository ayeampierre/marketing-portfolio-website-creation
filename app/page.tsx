import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TShape } from '@/components/t-shape'
import { Experience } from '@/components/experience'
import { Credentials } from '@/components/credentials'
import { BuiltHere } from '@/components/built-here'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TShape />
        <Experience />
        <Credentials />
        <BuiltHere />
      </main>
      <Contact />
    </>
  )
}
