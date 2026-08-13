'use client'

import { useState } from 'react'
import { Mail, Phone, Clock, MessageCircle, MessageSquareText } from 'lucide-react'

export default function Contact() {
  const chatPhone = '+13046290581'

  const [formData, setFormData] = useState({
    name: '',
    zipcode: '',
    service: '',
    datetime: '',
    paymentmethod: '',
    message: '',
  })

  const chatMessage = `Hi, I would like to book a massage session. Please let me know your availability.

Name: ${formData.name || 'Not provided'}
Zip code: ${formData.zipcode || 'Not provided'}
Service: ${formData.service || 'Not provided'}
Preferred date/time: ${formData.datetime || 'Not provided'}
Preferred payment method: ${formData.paymentmethod || 'Not provided'}
Notes: ${formData.message || 'Not provided'}

Thank you!`

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const whatsappHref = `https://wa.me/${chatPhone.replace('+', '')}?text=${encodeURIComponent(chatMessage)}`
  const smsHref = `sms:${chatPhone}?body=${encodeURIComponent(chatMessage)}`

  const handleWhatsAppClick = () => {
    window.open(whatsappHref, '_blank', 'noopener,noreferrer')
  }

  const handleSmsClick = () => {
    window.location.href = smsHref
  }

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container-max">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Get in Touch
              </p>
              <h2 className="text-4xl font-serif text-foreground text-balance md:text-5xl">
                Book Your Session
              </h2>
              <p className="text-pretty text-lg text-foreground/70">
                Ready to start your wellness journey? Contact me to schedule your personalized massage therapy session.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="tel:+1234567890"
                className="flex cursor-pointer items-start gap-4 group"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-foreground/70 transition-colors group-hover:text-primary">
                    +1 (304) 629-0581
                  </p>
                </div>
              </a>

              <a
                href="mailto:hello@sereneity.com"
                className="flex cursor-pointer items-start gap-4 group"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-foreground/70 transition-colors group-hover:text-primary">
                    massagebymarie1783@yahoo.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Available Hours</p>
                  <p className="text-foreground/70">
                    24 Hours a Day, 7 Days a Week<br />
                    Flexible scheduling to accommodate your needs
                  </p>
                </div>
              </div>

              {/* <div className="space-y-4 rounded-2xl border border-border bg-background/70 p-5 shadow-sm">
                <div>
                  <p className="text-sm font-medium uppercase tracking-widest text-primary">
                    Book via Chat
                  </p>
                  <h3 className="text-xl font-semibold text-foreground">
                    Message us for quick booking help
                  </h3>
                  <p className="text-sm text-foreground/70">
                    Choose the chat option that works best for you.
                  </p>
                </div>

                <div className="grid gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppClick}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-foreground transition hover:border-primary hover:bg-primary/5"
                  >
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <span className="font-medium">WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSmsClick}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-foreground transition hover:border-primary hover:bg-primary/5"
                  >
                    <MessageSquareText className="h-5 w-5 text-primary" />
                    <span className="font-medium">SMS / Text</span>
                  </button>
                </div>
              </div> */}
            </div>
          </div>

          <div>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="zipcode" className="mb-2 block text-sm font-medium text-foreground">
                  Zip Code / Area
                </label>
                <input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="21011"
                />
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-medium text-foreground">
                  Preferred Package / Service
                </label>
                <input
                  type="text"
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g., Swedish Massage, Deep Tissue Massage, Wellness Package"
                />
              </div>

              <div>
                <label htmlFor="datetime" className="mb-2 block text-sm font-medium text-foreground">
                  Preferred Date & Time
                </label>
                <input
                  type="datetime-local"
                  id="datetime"
                  name="datetime"
                  value={formData.datetime}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="paymentmethod" className="mb-2 block text-sm font-medium text-foreground">
                  Preferred Payment Method
                </label>
                <select 
                  type="paymentmethod"
                  id="paymentmethod"
                  name="paymentmethod"
                  value={formData.paymentmethod}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a payment method</option>
                  <option value="cashapp">Cash App</option>
                  <option value="bitcoin">Bitcoin</option>
                  <option value="paypal">PayPal</option>
                  <option value="zelle">Zelle</option>
                  <option value="venmo">Venmo</option>
                  <option value="applepay">Apple Pay</option>
                  <option value="chime">Chime</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Special Requests (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Any specific preferences or questions? Let me know!"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </button>

                <button
                  type="button"
                  onClick={handleSmsClick}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-3 font-semibold text-foreground transition hover:border-primary hover:bg-primary/5"
                >
                  <MessageSquareText className="h-5 w-5 text-primary" />
                  SMS / Text
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
