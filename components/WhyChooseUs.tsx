'use client'

import { CheckCircle } from 'lucide-react'

const reasons = [
  'Fully Insured',
  '10+ Years Experience',
  'Same-Day Emergency Service',
  'Free Estimates'
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-vr-green mb-12">
          Why Choose V&R Gutter Cleaning?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <CheckCircle className="text-vr-green flex-shrink-0" size={32} />
              <p className="text-xl font-semibold text-gray-800">{reason}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-vr-green to-vr-gray rounded-lg p-8 text-white text-center">
          <p className="text-xl font-semibold mb-4">
            Ready to see the difference professional service makes?
          </p>
          <a
            href="tel:774-849-1854"
            className="inline-block bg-white text-vr-green px-8 py-3 rounded-lg font-bold hover:bg-vr-light-green transition-colors"
          >
            Call Us Today: 774-849-1854
          </a>
        </div>
      </div>
    </section>
  )
}
