'use client'

import Image from 'next/image'
import { useState } from 'react'

const galleryImages = [
  {
    id: 1,
    title: 'Professional House Exterior',
    src: 'https://images.pexels.com/photos/1914833/pexels-photo-1914833.jpeg',
    alt: 'Contemporary house with beautiful exterior and professional roof'
  },
  {
    id: 2,
    title: 'Roof & Gutter Systems',
    src: 'https://images.pexels.com/photos/34023076/pexels-photo-34023076.jpeg',
    alt: 'Professional roof maintenance and gutter systems'
  },
  {
    id: 3,
    title: 'Pressure Washing Service',
    src: 'https://images.pexels.com/photos/5652626/pexels-photo-5652626.jpeg',
    alt: 'Professional pressure washing and exterior cleaning'
  },
  {
    id: 4,
    title: 'Gutter Installation',
    src: 'https://images.pexels.com/photos/34006744/pexels-photo-34006744.jpeg',
    alt: 'Professional gutter installation and repair'
  },
  {
    id: 5,
    title: 'Clean Residential Home',
    src: 'https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg',
    alt: 'Clean modern house exterior with well-maintained landscaping'
  },
  {
    id: 6,
    title: 'Professional Cleaning Equipment',
    src: 'https://images.pexels.com/photos/6196228/pexels-photo-6196228.jpeg',
    alt: 'Professional cleaning supplies and equipment'
  }
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  return (
    <section id="gallery" className="py-20 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-vr-green mb-4">
          Our Gallery
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          See the quality of our work
        </p>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((image, idx) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-lg cursor-pointer hover:shadow-xl transition-shadow ${
                idx % 3 === 1 ? 'md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-all flex items-end p-4">
                <p className="text-white font-bold opacity-0 hover:opacity-100">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-vr-light-green z-10"
              >
                ✕
              </button>
              <div className="relative h-96 md:h-96 w-full border-4 border-vr-green rounded-lg overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-white text-center mt-4 text-lg font-semibold">
                {selectedImage.title}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
