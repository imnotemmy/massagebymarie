import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Services from '@/components/services'
import About from '@/components/about'
import Benefits from '@/components/benefits'
import Testimonials from '@/components/testimonials'
import Pricing from '@/components/pricing'
import Policy from '@/components/policy'
import FAQ from '@/components/faq'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Massage by Marie - Professional Wellness Services',
  description: 'Experience professional massage therapy and wellness services. Swedish massage, deep tissue, aromatherapy, and more. Book your appointment today.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Benefits />
      <Testimonials />
      <Pricing />
      <Policy />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
