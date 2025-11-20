'use client'

import { Droplets, ShieldAlert, Hammer, Wind } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Gutter Cleaning & Debris Removal',
    icon: Droplets,
    bullets: [
      'Remove leaves and debris',
      'Clear downspouts',
      'Inspect for damage',
      'Ensure proper water flow'
    ]
  },
  {
    id: 2,
    title: 'Gutter Guard Installation',
    icon: ShieldAlert,
    bullets: [
      'Premium guard systems',
      'Reduce maintenance needs',
      'Prevent clogs',
      'Professional installation'
    ]
  },
  {
    id: 3,
    title: 'Roofing Repairs & Maintenance',
    icon: Hammer,
    bullets: [
      'Identify roof issues',
      'Professional repairs',
      'Prevent water damage',
      'Extend roof lifespan'
    ]
  },
  {
    id: 4,
    title: 'Exterior House Washing',
    icon: Wind,
    bullets: [
      'Remove dirt and grime',
      'Restore curb appeal',
      'Prevent mold growth',
      'Safe pressure washing'
    ]
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-vr-green mb-4">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Complete exterior care solutions for your home
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-vr-green transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-vr-light-green rounded-full p-4">
                    <Icon className="text-vr-green" size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-vr-green mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-vr-green font-bold mt-1">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
