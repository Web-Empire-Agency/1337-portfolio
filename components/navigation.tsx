"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Code, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import LanguageToggle from "@/components/language-toggle"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const pathname = usePathname()
  const { t } = useLanguage()

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/curriculum", label: t.nav.curriculum },
    { href: "/campuses", label: t.nav.campuses },
    { href: "/admissions", label: t.nav.admissions },
    { href: "/testimonials", label: t.nav.testimonials },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href
    }
    return pathname?.startsWith(href)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#020c1b]/90 backdrop-blur-md border-b border-[#00ff8c]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Code className="h-8 w-8 text-[#00ff8c] group-hover:animate-pulse" />
              <div className="absolute inset-0 bg-[#00ff8c] opacity-20 blur-sm group-hover:opacity-40 transition-opacity" />
            </div>
            <span className="text-xl font-mono font-bold text-[#ccd6f6] group-hover:text-[#00ff8c] transition-colors">
              1337
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[#ccd6f6] hover:text-[#00ff8c] transition-colors font-mono text-sm relative group
                  ${isActive(item.href) ? 'text-[#00ff8c]' : ''}`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#00ff8c] transition-all duration-300
                  ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`} 
                />
              </Link>
            ))}

            {/* Language Toggle */}
            <LanguageToggle />

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDark(!isDark)}
              className="text-[#ccd6f6] hover:text-[#00ff8c] border border-[#00ff8c]/30 hover:border-[#00ff8c] hover:bg-[#00ff8c]/10"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#ccd6f6] hover:text-[#00ff8c]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0a192f]/95 backdrop-blur-md rounded-lg mt-2 border border-[#00ff8c]/20">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 text-[#ccd6f6] hover:text-[#00ff8c] hover:bg-[#00ff8c]/10 rounded-md font-mono text-sm transition-colors
                    ${isActive(item.href) ? 'text-[#00ff8c] bg-[#00ff8c]/10' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
