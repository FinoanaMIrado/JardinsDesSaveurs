import { Hero } from '@/components/home/hero'
import { About } from '@/components/home/about'
import { SignatureDishes } from '@/components/home/signature-dishes'
import { WhyUs } from '@/components/home/why-us'
import { HoursSection } from '@/components/home/hours-section'
import { Testimonials } from '@/components/home/testimonials'
import { CtaBanner } from '@/components/home/cta-banner'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <SignatureDishes />
      <WhyUs />
      <HoursSection />
      <Testimonials />
      <CtaBanner />
    </main>
  )
}
