'use client'

import Image from 'next/image'
import { useState } from 'react'

const galleryImages = [
  {
    id: 1,
    title: 'Before & After - Gutter Cleaning',
    src: 'https://images.unsplash.com/photo-1565182000675-b0ff131df867?w=500&h=600&fit=crop',
    alt: 'Before and after gutter cleaning'
  },
  {
    id: 2,
    title: 'Roof Maintenance',
    src: 'https://images.unsplash.com/photo-1581578731548-c64695c952952?w=500&h=500&fit=crop',
    alt: 'Professional roof maintenance work'
  },
  {
    id: 3,
    title: 'House Washing Results',
    src: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b3?w=500&h=600&fit=crop',
    alt: 'Clean house exterior washing results'
  },
  {
    id: 4,
    title: 'Gutter Guard Installation',
    src: 'https://images.unsplash.com/photo-1577874543154-fee174e2d379?w=500&h=500&fit=crop',
    alt: 'Professional gutter guard installation'
  },
  {
    id: 5,
    title: 'Detail Work Excellence',
    src: 'https://images.unsplash.com/photo-1581578731548-c64695c952952?w=500&h=600&fit=crop',
    alt: 'Detail work on roof edges'
  },
  {
    id: 6,
    title: 'Complete Home Exterior',
    src: 'https://images.unsplash.com/photo-1565182000675-b0ff131df867?w=500&h=500&fit=crop',
    alt: 'Complete exterior maintenance project'
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
