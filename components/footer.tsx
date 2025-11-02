"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Brand */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center bg-transparent">
                <Image
                  src="/logo-removebg-preview.png"
                  alt="Yến Tâm Logo"
                  width={40}
                  height={40}
                  className="drop-shadow-lg object-contain"
                />
              </div>
              <h3 className="font-bold text-base">Yến Tâm</h3>
            </div>
            {/* <p className="text-xs text-primary-foreground/80 leading-relaxed">Yến sào cao cấp 100% tự nhiên. Phòng tâm vì sức khỏe.</p> */}
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-bold text-sm">Liên kết nhanh</h4>
            <ul className="space-y-1.5 text-xs text-primary-foreground/80">
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
          <div className="space-y-2">
            <h4 className="font-bold text-sm">Liên hệ</h4>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition">
                <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                <a href="tel:0795099393">079.509.9393</a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition">
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                <a href="mailto:info@yentam.com">info@yentam.com</a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">Chung cư Stown Tham Lương, Phường Đông Hưng Thuận, Thành phố Hồ Chí Minh</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-2">
            <h4 className="font-bold text-sm">Theo dõi</h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100069772802576"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition text-primary"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition text-primary"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-xs text-primary-foreground/70">
          <p>&copy; 2025 Yến Tâm. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
