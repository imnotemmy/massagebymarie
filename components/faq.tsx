'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What should I expect during my first massage?',
    answer: 'During your first visit, we will discuss your health history, specific concerns, and goals. You will fill out a brief form, then enjoy a relaxing massage customized to your needs. The session includes a consultation to ensure maximum benefit.',
  },
  {
    question: 'How often should I get a massage?',
    answer: 'This depends on your individual needs. For general wellness, monthly massage is beneficial. For chronic pain or stress, weekly or bi-weekly sessions are recommended. We will create a personalized schedule during your consultation.',
  },
  {
    question: 'Is prenatal massage safe?',
    answer: 'Yes! Prenatal massage is very safe when performed by a trained therapist. It can help relieve pregnancy discomforts, reduce anxiety, and improve sleep. Sessions are customized with proper positioning and pressure.',
  },
  {
    question: 'What should I wear?',
    answer: 'You will undress to your comfort level. Most clients undress completely and are draped with sheets, leaving only the area being massaged exposed. Please let me know if you have any preferences.',
  },
  {
    question: 'Do you offer gift certificates?',
    answer: 'Absolutely! Gift certificates are available in any amount and are perfect for friends and family. Contact us to purchase a certificate that can be redeemed for any of our services.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We ask for 24 hours notice for cancellations. Cancellations made within 24 hours may be charged a fee. We understand that emergencies happen—just let us know as soon as possible.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-max space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm uppercase tracking-widest text-primary font-medium">
            Questions
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            Find answers to common questions about our services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-card/80 transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className="font-semibold text-foreground text-left">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-background border-t border-border">
                  <p className="text-foreground/80 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
