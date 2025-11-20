'use client'

import { Phone } from 'lucide-react'

export default function FloatingCallButton() {
  return (
    <a
      href="tel:774-849-1854"
      className="fixed bottom-6 right-6 bg-vr-green text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 flex items-center gap-2 z-30 font-semibold text-sm md:text-base transition-all hover:scale-105"
    >
      <Phone size={20} />
      <span className="hidden sm:inline">Call 774-849-1854</span>
      <span className="sm:hidden">Call Now</span>
    </a>
  )
}
