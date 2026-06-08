'use client'

import Link from 'next/link'
import { Heart, Mail, Share2 } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary-foreground text-primary flex items-center justify-center font-serif text-xl font-bold">
                  <Image src="/logo.svg" alt="Logo" width={32} height={32} />
                </div>
                <span className="font-serif text-lg font-semibold">Massage by Marie</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Professional massage therapy and wellness services for your complete relaxation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href="#services" className="hover:text-primary-foreground transition-colors">
                    Swedish Massage
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary-foreground transition-colors">
                    Deep Tissue
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary-foreground transition-colors">
                    Relaxation Massage
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary-foreground transition-colors">
                    Hot Stone
                  </a>
                </li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h3 className="font-semibold mb-4">Information</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href="#about" className="hover:text-primary-foreground transition-colors">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-primary-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-primary-foreground transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold mb-4">Follow</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Social Media"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                >
                  <Heart className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Email"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Share"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
              <p>&copy; 2026 Massage by Masie. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
