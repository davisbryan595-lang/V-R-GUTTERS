'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-1">
            <div className="flex justify-center md:justify-start mb-4">
              <div className="relative w-32 h-32">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2F98a3bf12d3fd43d6afbc24b607fa1ca0%2F008bdbf417ad42c5927dd0e365667fab?format=webp&width=800"
                  alt="V&R Gutter Cleaning Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-center md:text-left text-sm text-gray-600">
              Serving Rhode Island
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-vr-green mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-gray-700 hover:text-vr-green transition-colors">Home</Link></li>
              <li><Link href="#services" className="text-gray-700 hover:text-vr-green transition-colors">Services</Link></li>
              <li><Link href="#gallery" className="text-gray-700 hover:text-vr-green transition-colors">Gallery</Link></li>
              <li><Link href="#contact" className="text-gray-700 hover:text-vr-green transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-vr-green mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-700 hover:text-vr-green transition-colors">Gutter Cleaning</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-vr-green transition-colors">Gutter Guard</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-vr-green transition-colors">Roofing Repairs</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-vr-green transition-colors">House Washing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-vr-green mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-vr-green" />
                <a href="tel:774-849-1854" className="text-gray-700 hover:text-vr-green transition-colors">
                  774-849-1854
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-vr-green mt-0.5 flex-shrink-0" />
                <div className="text-gray-700 text-sm">
                  Charlestown<br />
                  North Scituate<br />
                  Coventry<br />
                  West Warwick, RI
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} V&R Gutter Cleaning. All rights reserved.</p>
          <p className="text-sm mt-2">Professional Gutter Cleaning & Exterior Services in Rhode Island</p>
        </div>
      </div>
    </footer>
  )
}
