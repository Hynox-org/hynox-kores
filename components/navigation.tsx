"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image src="/header_logo.png" alt="Kores Fabric Logo" width={120} height={32} className="rounded-lg" />
            {/* <span className="font-bold text-lg text-foreground sm:inline">Kores Fabric</span> */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-foreground hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in-up">
            <Link href="/" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors">
              Home
            </Link>
            <Link
              href="/products"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
