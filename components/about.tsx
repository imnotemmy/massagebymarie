'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/stone-massage.jpg"
              alt="Spa wellness environment"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-primary font-medium">
                About Me
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground text-balance">
                Professional Masseuse with 7+ Years Experience
              </h2>
            </div>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                At Massage by Marie, we are dedicated to providing professional massage services focused on relaxation, comfort, and overall wellness.
              </p>
              <p>
                Every session is customized to address your specific needs, whether you&apos;re seeking relief from chronic pain, stress reduction, or simply a moment of peace in your busy life.
              </p>
              <p>
                Our goal is to create a calm, respectful, and welcoming experience for every client through quality service and personalized care.
              </p>
            </div>

            {/* Credentials */}
            <div className="pt-4 border-t border-border">
              <h3 className="font-semibold text-foreground mb-3">Qualifications</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>✓ Licensed Massage Therapist (LMT)</li>
                <li>✓ Certified in Swedish & Deep Tissue Massage</li>
                <li>✓ Specialized Training in Prenatal Massage</li>
                <li>✓ Continuing Education in Holistic Wellness</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
