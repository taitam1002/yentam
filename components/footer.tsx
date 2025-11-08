"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-background/95 backdrop-blur-lg border-t-2 border-accent/20 py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 mb-6 sm:mb-4">
          {/* Brand */}
          <div className="space-y-2 sm:space-y-1 col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 sm:gap-2">
              <div className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center bg-transparent">
                <Image
                  src="/logo-removebg-preview.png"
                  alt="Yến Tâm Logo"
                  width={40}
                  height={40}
                  className="drop-shadow-lg object-contain"
                />
              </div>
              <h3 className="font-bold text-base sm:text-sm text-foreground">Yến Tâm</h3>
            </div>
            {/* <p className="text-xs text-primary-foreground/80 leading-relaxed">Yến sào cao cấp 100% tự nhiên. Phòng tâm vì sức khỏe.</p> */}
          </div>

          {/* Quick Links */}
          <div className="space-y-2 sm:space-y-1">
            <h4 className="font-bold text-sm sm:text-xs text-foreground">Liên kết nhanh</h4>
            <ul className="space-y-2 sm:space-y-1 text-sm sm:text-xs text-foreground/80">
              <li>
                <Link href="#menu" className="hover:text-accent transition block">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-accent transition block">
                  Dòng sản phẩm
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="hover:text-accent transition block">
                  Lợi ích
                </Link>
              </li>
              <li>
                <Link href="#videos" className="hover:text-accent transition block">
                  Video & Ảnh
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2 sm:space-y-1 col-span-2 sm:col-span-1">
            <h4 className="font-bold text-sm sm:text-xs text-foreground">Liên hệ</h4>
            <ul className="space-y-2 sm:space-y-1 text-sm sm:text-xs">
              <li className="flex items-center gap-2.5 sm:gap-2 text-foreground/80 hover:text-accent transition">
                <Phone className="w-5 h-5 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                <a href="tel:0938697977" className="break-all">093.869.7977</a>
              </li>
              <li className="flex items-center gap-2.5 sm:gap-2 text-foreground/80 hover:text-accent transition">
                <Mail className="w-5 h-5 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                <a href="mailto:info@yentam.com" className="break-all">cus.yentam@gmail.com</a>
              </li>
              <li className="flex items-start gap-2.5 sm:gap-2 text-foreground/80">
                <MapPin className="w-5 h-5 sm:w-3.5 sm:h-3.5 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed text-justify">Chung cư Stown Tham Lương, Phường Đông Hưng Thuận, Thành phố Hồ Chí Minh</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-2 sm:space-y-1 col-span-2 sm:col-span-1 sm:col-start-2 lg:col-start-auto">
            <h4 className="font-bold text-sm sm:text-xs text-foreground">Theo dõi</h4>
            <div className="flex gap-3 sm:gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100069772802576"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-8 sm:h-8 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition text-primary"
                title="Facebook"
              >
                <Facebook className="w-5 h-5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 sm:w-8 sm:h-8 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition text-primary"
                title="Instagram"
              >
                <Instagram className="w-5 h-5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-4 text-center text-sm sm:text-xs text-foreground/60">
          <p>&copy; 2025 Công ty TNHH Yến Tâm. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
