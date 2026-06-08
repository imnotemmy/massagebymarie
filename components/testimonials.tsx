'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Yoga Instructor',
    content: 'The massage sessions have been transformative for my chronic back pain. I feel more mobile and energized than ever before.',
    rating: 5,
  },
  {
    name: 'Jennifer Chen',
    role: 'Expectant Mother',
    content: 'The prenatal massage was exactly what I needed. It relieved my lower back pain and helped me feel more comfortable during pregnancy.',
    rating: 5,
  },
  {
    name: 'Michael Torres',
    role: 'Attorney',
    content: 'After high-stress weeks, the deep tissue massage helps me release all the tension. It&apos;s become an essential part of my self-care routine.',
    rating: 5,
  },
  {
    name: 'Emily Watson',
    role: 'Marketing Executive',
    content: 'The aromatherapy massage combined with the calming environment is pure bliss. I always leave feeling completely rejuvenated.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-max space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm uppercase tracking-widest text-primary font-medium">
            Client Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground text-balance">
            Loved by Our Clients
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            See what our satisfied clients have to say about their wellness journey
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
