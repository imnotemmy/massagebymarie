'use client'

import Image from 'next/image'
import { Heart, Brain, Zap, Smile } from 'lucide-react'

const benefits = [
  {
    icon: Heart,
    title: 'Improved Circulation',
    description: 'Enhanced blood flow promotes better oxygen delivery to tissues and organs.',
  },
  {
    icon: Brain,
    title: 'Stress Relief',
    description: 'Reduce anxiety and cortisol levels through therapeutic touch and relaxation.',
  },
  {
    icon: Zap,
    title: 'Pain Management',
    description: 'Alleviate chronic pain and muscle tension for improved mobility and comfort.',
  },
  {
    icon: Smile,
    title: 'Better Sleep',
    description: 'Experience deeper, more restorative sleep and improved rest quality.',
  },
]

export default function Benefits() {
  return (
    <section className="section-padding bg-card">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-primary font-medium">
                Wellness Benefits
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground text-balance">
                Transform Your Health
              </h2>
              <p className="text-lg text-foreground/70 text-pretty">
                Regular massage therapy offers profound benefits for your physical and mental well-being.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                      <p className="text-foreground/70 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg order-first md:order-last">
            <Image
              src="/spa-massage.jpg"
              alt="Wellness and relaxation benefits"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
