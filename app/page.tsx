import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import WhyChooseUs from '@/components/WhyChooseUs'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <ContactForm />
    </main>
  )
}
