'use client'

import emailjs from '@emailjs/browser'
import { useEffect, useState } from 'react'
import { Mail, Phone, Clock, MessageCircle, MessageSquareText } from 'lucide-react'

export default function Contact() {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  const chatPhone = '+13046290581'
  const chatMessage = 'Hi, I would like to book a massage session. Please let me know your availability.'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zipcode: '',
    service: '',
    datetime: '',
    location: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    if (publicKey) {
      emailjs.init(publicKey)
    }
  }, [publicKey])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS is not configured yet. Add your EmailJS keys to the environment variables.')
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          zipcode: formData.zipcode || 'Not provided',
          service: formData.service || 'Not provided',
          datetime: formData.datetime || 'Not provided',
          location: formData.location || 'Not provided',
          message: formData.message,
        },
        publicKey
      )

      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        zipcode: '',
        service: '',
        datetime: '',
        location: '',
        message: '',
      })

      setTimeout(() => {
        setSubmitted(false)
      }, 4000)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to send your message right now.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-primary font-medium">
                Get in Touch
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground text-balance">
                Book Your Session
              </h2>
              <p className="text-lg text-foreground/70 text-pretty">
                Ready to start your wellness journey? Contact me to schedule your personalized massage therapy session.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <a
                href="tel:+1234567890"
                className="flex gap-4 items-start group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-foreground/70 group-hover:text-primary transition-colors">
                    +1 (304) 629-0581
                  </p>
                </div>
              </a>

              <a
                href="mailto:hello@sereneity.com"
                className="flex gap-4 items-start group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-foreground/70 group-hover:text-primary transition-colors">
                     massagebymarie1783@yahoo.com
                  </p>
                </div>
              </a>

              {/* <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-foreground/70">
                    123 Wellness Street<br />
                    Peaceful City, SC 12345
                  </p>
                </div>
              </div> */}

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Available Hours</p>
                  <p className="text-foreground/70">
                    24 Hours a Day, 7 Days a Week<br />
                    Flexible scheduling to accommodate your needs
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-background/70 p-5 shadow-sm space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-widest text-primary font-medium">Book via Chat</p>
                  <h3 className="text-xl font-semibold text-foreground">Message us for quick booking help</h3>
                  <p className="text-sm text-foreground/70">Choose the chat option that works best for you.</p>
                </div>

                <div className="grid gap-3">
                  <a
                    href={`https://wa.me/${chatPhone.replace('+', '')}?text=${encodeURIComponent(chatMessage)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-foreground transition hover:border-primary hover:bg-primary/5"
                  >
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <span className="font-medium">WhatsApp</span>
                  </a>

                  <a
                    href={`sms:${chatPhone}?body=${encodeURIComponent(chatMessage)}`}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-foreground transition hover:border-primary hover:bg-primary/5"
                  >
                    <MessageSquareText className="h-5 w-5 text-primary" />
                    <span className="font-medium">Text / SMS</span>
                  </a>

                  <a
                    href={`sms:${chatPhone}?body=${encodeURIComponent(chatMessage)}`}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-foreground transition hover:border-primary hover:bg-primary/5"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="font-medium">iMessage / Messages</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="(123) 456-7890"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Zip Code / Area
                </label>
                <input
                  type="zipcode"
                  id="zipcode"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="21011"
                />
              </div>

              <div>
                <label htmlFor="services" className="block text-sm font-medium text-foreground mb-2">
                  Preferred Package / Service
                </label>
                <input
                  type="text"
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="e.g., Swedish Massage, Deep Tissue Massage, Wellness Package"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Preferred Date & Time
                </label>
                <input
                  type="datetime-local"
                  id="datetime"
                  name="datetime"
                  value={formData.datetime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Select date and time"
                />
              </div>

              {/* <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Preferred Branch / Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="eg New Jersey, Maryland, Virginia"
                />
              </div> */}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Any specific preferences or questions? Let me know!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Book Now'}
              </button>

              {submitError && (
                <p className="text-center text-sm text-red-600 font-medium">{submitError}</p>
              )}

              {submitted && (
                <p className="text-center text-sm text-primary font-medium">
                  Thank you! I&apos;ll be in touch soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
