"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-background/95 backdrop-blur-lg border-t-2 border-accent/20 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {/* Brand */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center bg-transparent">
                <Image
                  src="/logo-removebg-preview.png"
                  alt="Yến Tâm Logo"
                  width={32}
                  height={32}
                  className="drop-shadow-lg object-contain"
                />
              </div>
              <h3 className="font-bold text-sm text-foreground">Yến Tâm</h3>
            </div>
            {/* <p className="text-xs text-primary-foreground/80 leading-relaxed">Yến sào cao cấp 100% tự nhiên. Phòng tâm vì sức khỏe.</p> */}
          </div>

          {/* Quick Links */}
          <div className="space-y-1">
            <h4 className="font-bold text-xs text-foreground">Liên kết nhanh</h4>
            <ul className="space-y-1 text-xs text-foreground/80">
              <li>
                <Link href="#menu" className="hover:text-accent transition">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-accent transition">
                  Dòng sản phẩm
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="hover:text-accent transition">
                  Lợi ích
                </Link>
              </li>
              <li>
                <Link href="#videos" className="hover:text-accent transition">
                  Video & Ảnh
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-1">
            <h4 className="font-bold text-xs text-foreground">Liên hệ</h4>
            <ul className="space-y-1 text-xs">
              <li className="flex items-center gap-2 text-foreground/80 hover:text-accent transition">
                <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                <a href="tel:0938697977">093.869.7977</a>
              </li>
              <li className="flex items-center gap-2 text-foreground/80 hover:text-accent transition">
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                <a href="mailto:info@yentam.com">info@yentam.com</a>
              </li>
              <li className="flex items-start gap-2 text-foreground/80">
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">Chung cư Stown Tham Lương, Phường Đông Hưng Thuận, Thành phố Hồ Chí Minh</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-1">
            <h4 className="font-bold text-xs text-foreground">Theo dõi</h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100069772802576"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition text-primary"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition text-primary"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-foreground/60">
          <p>&copy; 2025 Công ty TNHH Yến Tâm. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
