"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/footer_logo.png" alt="Kores Fabric Logo" width={220} height={120} className="rounded-lg" />
              {/* <span className="font-bold text-lg">Kores Fabric</span> */}
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Premium wholesale clothing and printing services from Tirupur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary-foreground/80 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary-foreground/80 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-foreground/80 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                  DTF Printing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                  Embroidery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                  Puff Print
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                  Custom Printing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Tirupur, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+919500989894" className="hover:text-primary-foreground/80 transition-colors">
                  +91 95009 89894
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@koresfabric.com" className="hover:text-primary-foreground/80 transition-colors">
                  info@koresfabric.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/share/1FqRakTdPU/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/koresfabric.in?igsh=ZGRzZTkwazFpOGtz" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@koresfabric" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80 gap-4">
            <p>&copy; 2025 Kores Fabric. All rights reserved.</p>
            <p>
              Developed by <span className="font-semibold text-primary-foreground"><a href="https://www.hynox.in">HYNOX</a></span>
            </p>
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
    </footer>
  )
}
