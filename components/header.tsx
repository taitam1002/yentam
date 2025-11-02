"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-lg border-b-2 border-accent/20 z-50 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300">
            <div className="w-14 h-14 flex items-center justify-center bg-transparent">
              <Image
                src="/logo-removebg-preview.png"
                alt="Yến Tâm Logo"
                width={56}
                height={56}
                priority
                className="drop-shadow-lg object-contain"
              />
            </div>
            <div className="block">
              <h1 className="text-accent font-bold text-sm sm:text-lg hover:text-foreground transition-colors duration-300">
                Yến Tâm
              </h1>
              <p className="text-[10px] sm:text-xs text-foreground/60">Toàn tâm vì yến</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#benefits"
              className="text-foreground hover:text-accent font-medium transition-colors duration-300 relative group"
            >
              Lợi ích
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#menu"
              className="text-foreground hover:text-accent font-medium transition-colors duration-300 relative group"
            >
              Menu
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#gallery"
              className="text-foreground hover:text-accent font-medium transition-colors duration-300 relative group"
            >
              Dòng sản phẩm
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#videos"
              className="text-foreground hover:text-accent font-medium transition-colors duration-300 relative group"
            >
              Video
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-accent/20 rounded-lg transition-colors duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-accent" /> : <Menu className="w-6 h-6 text-accent" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 animate-slide-up">
            <Link
              href="#benefits"
              className="block px-4 py-2 hover:bg-accent/10 rounded-lg font-medium text-foreground hover:text-accent transition-colors duration-300"
            >
              Lợi ích
            </Link>
            <Link
              href="#menu"
              className="block px-4 py-2 hover:bg-accent/10 rounded-lg font-medium text-foreground hover:text-accent transition-colors duration-300"
            >
              Menu
            </Link>
            <Link
              href="#gallery"
              className="block px-4 py-2 hover:bg-accent/10 rounded-lg font-medium text-foreground hover:text-accent transition-colors duration-300"
            >
              Dòng sản phẩm
            </Link>
            <Link
              href="#videos"
              className="block px-4 py-2 hover:bg-accent/10 rounded-lg font-medium text-foreground hover:text-accent transition-colors duration-300"
            >
              Video
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
