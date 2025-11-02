"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Phone, MessageCircle, Facebook } from "lucide-react"

interface ContactDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  const phoneNumber = "0795099393"
  const facebookUrl = "https://www.facebook.com/profile.php?id=100069772802576"

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-accent text-center">
            Liên hệ với chúng tôi
          </DialogTitle>
          <DialogDescription className="text-center text-foreground/70">
            Chọn phương thức liên hệ phù hợp với bạn
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-6">
          {/* Phone */}
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-4 p-4 bg-primary text-card rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-card/80">Gọi điện</p>
              <p className="font-bold text-lg">{phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1.$2.$3")}</p>
            </div>
          </a>

          {/* Zalo */}
          <a
            href={`https://zalo.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-accent text-primary rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-primary/80">Nhắn tin Zalo</p>
              <p className="font-bold text-lg">{phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1.$2.$3")}</p>
            </div>
          </a>

          {/* Facebook */}
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Facebook className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-white/80">Facebook</p>
              <p className="font-bold text-lg">Yến Tâm</p>
            </div>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}

