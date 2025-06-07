"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Footer() {
  const { t } = useLanguage()

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@1337.ma", label: "Email" },
  ]

  const quickLinks = [
    { href: "/curriculum", label: t.nav.curriculum },
    { href: "/campuses", label: t.nav.campuses },
    { href: "/admissions", label: t.nav.admissions },
    { href: "/testimonials", label: t.nav.testimonials },
  ]

  const campuses = [
    { name: t.campuses.locations.khouribga.name, address: t.campuses.locations.khouribga.address },
    { name: t.campuses.locations.benguerir.name, address: t.campuses.locations.benguerir.address },
    { name: t.campuses.locations.tetouan.name, address: t.campuses.locations.tetouan.address },
    { name: t.campuses.locations.rabat.name, address: t.campuses.locations.rabat.address },
  ]

  return (
    <footer className="relative bg-gradient-to-t from-[#020c1b] to-[#0a192f] border-t border-bg-primary-20">
      {/* Gradient Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff8c] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-mono font-bold text-primary">1337</div>
              <div className="text-text/70 text-sm">Coding School</div>
            </div>
            <p className="text-text/70 text-sm leading-relaxed">{t.footer.description}</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="inline-flex items-center justify-center w-10 h-10 bg-primary-light border border-bg-primary-30 rounded-lg text-text hover:text-primary hover:border-[#00ff8c] hover:bg-bg-primary-10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-mono font-semibold text-text">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-text/70 hover:text-primary transition-colors text-sm font-mono group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Campuses */}
          <div className="space-y-6">
            <h3 className="text-lg font-mono font-semibold text-text">{t.footer.campuses}</h3>
            <ul className="space-y-4">
              {campuses.map((campus, index) => (
                <li key={index} className="space-y-1">
                  <div className="text-primary text-sm font-mono font-semibold">{campus.name}</div>
                  <div className="text-text/70 text-xs">{campus.address}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-mono font-semibold text-text">{t.footer.contact}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-text/70 text-sm">AyoubMzianDeveloper@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-text/70 text-sm">+212 773473782</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div className="text-text/70 text-sm">
                  <div>Khouribga, Ben Guerir,</div>
                  <div>Tetouan, Rabat, Morocco</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-bg-primary-20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-text/70 text-sm font-mono">
              © {new Date().getFullYear()} {t.footer.copyright}
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-text/70 hover:text-primary transition-colors">
                {t.footer.privacy}
              </Link>
              <Link href="/terms" className="text-text/70 hover:text-primary transition-colors">
                {t.footer.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal-style decorative elements */}
      <div className="absolute bottom-4 left-4 opacity-20">
        <div className="text-primary font-mono text-xs">{t.footer.systemStatus}</div>
      </div>
    </footer>
  )
}
