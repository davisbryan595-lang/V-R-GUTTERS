'use client'

import { useState } from 'react'
import { Phone, Mail } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', address: '', service: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-vr-green to-vr-gray px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Get Your Free Quote
        </h2>
        <p className="text-center text-green-50 mb-12 text-lg">
          Contact us today for a professional assessment and estimate
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="text-vr-light-green" size={24} />
                <h3 className="text-xl font-bold text-white">Call Us</h3>
              </div>
              <a href="tel:774-849-1854" className="text-vr-light-green text-lg font-semibold hover:text-white transition-colors">
                774-849-1854
              </a>
              <p className="text-green-50 mt-2">Available for emergency service</p>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="text-vr-light-green" size={24} />
                <h3 className="text-xl font-bold text-white">Service Areas</h3>
              </div>
              <p className="text-green-50">
                Charlestown • North Scituate • Coventry • West Warwick
              </p>
              <p className="text-vr-light-green font-semibold mt-2">Serving Rhode Island</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white rounded-lg p-8 shadow-xl">
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 text-vr-green rounded-lg font-semibold">
                Thank you! We'll contact you shortly with your free quote.
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-vr-green focus:ring-2 focus:ring-vr-light-green"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-vr-green focus:ring-2 focus:ring-vr-light-green"
                    placeholder="(774) 849-1854"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-vr-green focus:ring-2 focus:ring-vr-light-green"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-vr-green focus:ring-2 focus:ring-vr-light-green"
                  placeholder="123 Main St, Charlestown, RI"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-vr-green focus:ring-2 focus:ring-vr-light-green"
                >
                  <option value="">Select a service</option>
                  <option value="gutter-cleaning">Gutter Cleaning & Debris Removal</option>
                  <option value="gutter-guard">Gutter Guard Installation</option>
                  <option value="roofing">Roofing Repairs & Maintenance</option>
                  <option value="washing">Exterior House Washing</option>
                  <option value="multiple">Multiple Services</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-vr-green text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors"
              >
                Send Request for Free Estimate
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
