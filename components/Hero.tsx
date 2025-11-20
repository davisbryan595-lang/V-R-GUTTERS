'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg)'}}>
      {/* Background Image - Next/Image Fallback */}
      <div className="absolute inset-0 -z-20 hidden">
        <Image
          src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg"
          alt="Modern family home exterior"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>
      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          V&R GUTTER CLEANING
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white mb-2 drop-shadow-lg">
          Professional Gutter Cleaning & Exterior Services
        </p>

        {/* Service areas */}
        <p className="text-lg text-white mb-10 drop-shadow-lg font-semibold">
          Charlestown • North Scituate • Coventry • West Warwick
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contact"
            className="bg-vr-green text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors shadow-lg"
          >
            Get Free Quote
          </Link>
          <Link
            href="#gallery"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-vr-green transition-colors shadow-lg"
          >
            See Our Work
          </Link>
        </div>
      </div>
    </section>
  )
}
