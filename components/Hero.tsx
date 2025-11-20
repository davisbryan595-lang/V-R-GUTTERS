'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white pt-16 px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-full max-w-md h-64 md:h-80">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets%2F98a3bf12d3fd43d6afbc24b607fa1ca0%2F008bdbf417ad42c5927dd0e365667fab?format=webp&width=800"
              alt="V&R Gutter Cleaning Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-vr-green mb-4">
          V&R GUTTER CLEANING
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-700 mb-2">
          Professional Gutter Cleaning & Exterior Services
        </p>

        {/* Service areas */}
        <p className="text-lg text-vr-gray mb-10">
          Charlestown • North Scituate • Coventry • West Warwick
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contact"
            className="bg-vr-green text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors"
          >
            Get Free Quote
          </Link>
          <Link
            href="#gallery"
            className="border-2 border-vr-green text-vr-green px-8 py-4 rounded-lg font-bold text-lg hover:bg-vr-light-green transition-colors"
          >
            See Our Work
          </Link>
        </div>
      </div>
    </section>
  )
}
