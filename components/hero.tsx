'use client'

import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/massage-hero.png"
          alt="Relaxing massage therapy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max section-padding text-center">
        <div className="space-y-6 animate-fadeInUp">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-widest text-primary font-medium">
              Professional Wellness
            </p>
            <h1 className="text-5xl md:text-7xl font-serif text-foreground text-balance leading-tight">
              Discover Your Inner Peace
            </h1>
          </div>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto text-pretty leading-relaxed">
            Experience transformative massage therapy and wellness services designed to restore your body, mind, and spirit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a
              href="#contact"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
            >
              Book Now
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-card text-foreground border-2 border-border rounded-full font-semibold hover:bg-secondary/20 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#services" className="inline-block">
            <ChevronDown className="w-6 h-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  )
}
