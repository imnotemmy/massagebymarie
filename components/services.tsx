'use client'

import { Leaf } from 'lucide-react'

const services = [
  {
    title: 'Swedish Massage',
    description: 'Classic relaxation massage using long, flowing strokes to reduce tension and improve circulation.',
    icon: '🌸',
  },
  {
    title: 'Deep Tissue Massage',
    description: 'Intensive therapy targeting muscle knots and chronic tension for lasting relief.',
    icon: '💪',
  },
  {
    title: 'Relaxation Massage',
    description: 'Soothing massage combined with essential oils to enhance relaxation and emotional well-being.',
    icon: '🌿',
  },
  {
    title: 'Hot Stone Massage',
    description: 'Heated stones placed on muscles to increase blood flow and accelerate healing.',
    icon: '🪨',
  },
  {
    title: 'Nuru Massage',
    description: 'Sensual massage using a special gel to create a slippery, full-body experience.',
    icon: '💧',
  },
  {
    title: 'Reflexology',
    description: 'Ancient technique focusing on pressure points in feet to promote overall wellness.',
    icon: '🦶',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="container-max space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm uppercase tracking-widest text-primary font-medium">
            Our Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground text-balance">
            Premium Massage Services
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            Each service is tailored to your unique needs and wellness goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
