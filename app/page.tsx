import CTA from '@/components/CTA'
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neutral Network of the Brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
         id="456"
         name="Countsy the Number Wizard"
         topic="Derivatives & Integrals"
         subject="math"
         duration={30}
         color="#e5d0ff"
        />
        <CompanionCard
          id="789"
          name="Linguo the Language Master"
          topic="Grammar & Vocabulary"
          subject="language"
          duration={60}
          color="#cceeff"
        />
      </section>
      <section className="home-section">
        <CompanionsList 
          title="Recent completed sessions"
          companions = {recentSessions}
          className="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page