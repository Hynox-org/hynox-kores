"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-background via-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Reach out to us today!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-in-left space-y-8">
              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      Kores Fabric
                      <br />
                      Tirupur, Tamil Nadu
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                    <a href="tel:+919876543210" className="text-primary hover:text-primary/80 transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                    <a
                      href="mailto:info@koresfabric.com"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      info@koresfabric.com
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919876543210?text=Hi%20Kores%20Fabric%2C%20I%20would%20like%20to%20inquire%20about%20your%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <form onSubmit={handleSubmit} className="p-8 bg-card rounded-xl border border-border">
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>

                {submitted && (
                  <div className="mt-4 p-4 bg-primary/10 border border-primary rounded-lg text-primary text-center animate-fade-in-up">
                    Thank you! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
