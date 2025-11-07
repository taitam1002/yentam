import { ReactNode } from "react"
import Link from "next/link"
import { Facebook, Phone } from "lucide-react"

type ContactItem = {
  id: string
  label: string
  href: string
  icon?: ReactNode
  gradient: string
  glow: string
  secondaryGlow: string
  description?: string
}

const contactItems: ContactItem[] = [
  {
    id: "facebook",
    label: "Facebook Yến Tâm",
    href: "https://www.facebook.com/profile.php?id=100069772802576",
    icon: <Facebook className="h-5 w-5" />,
    gradient: "from-primary via-primary/90 to-primary",
    glow: "bg-primary/35",
    secondaryGlow: "bg-primary/25",
    description: "Theo dõi fanpage",
  },
  {
    id: "zalo",
    label: "Zalo Official",
    href: "https://zalo.me/0938697977",
    icon: (
      <span className="text-xs font-semibold tracking-wide">Zalo</span>
    ),
    gradient: "from-primary/90 via-primary to-primary/80",
    glow: "bg-primary/30",
    secondaryGlow: "bg-primary/20",
    description: "Chat nhanh",
  },
  {
    id: "phone",
    label: "Hotline tư vấn",
    href: "tel:+84938697977",
    icon: <Phone className="h-5 w-5" />,
    gradient: "from-accent via-accent/90 to-accent/80",
    glow: "bg-accent/35",
    secondaryGlow: "bg-accent/25",
    description: "Gọi ngay",
  },
]

export default function FloatingContactBar() {
  return (
    <div className="fixed right-6 top-1/2 z-[60] hidden -translate-y-1/2 flex-col items-center gap-5 md:flex">
      {contactItems.map(item => {
        const isExternal = item.href.startsWith("http")

        return (
          <div key={item.id} className="group relative">
            <div
              className={`absolute inset-[-14px] rounded-full ${item.secondaryGlow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
            ></div>
            <div
              className={`absolute inset-[-6px] rounded-full ${item.glow} blur-xl opacity-70 transition duration-700 group-hover:opacity-100 animate-pulse-soft`}
            ></div>

            <Link
              href={item.href}
              {...(isExternal && item.id !== "phone"
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient} text-white shadow-[0_18px_35px_-18px_rgba(0,0,0,0.8)] transition-all duration-500 hover:scale-110 hover:shadow-[0_28px_45px_-18px_rgba(0,0,0,0.7)]`}
            >
              <span className="sr-only">{item.label}</span>
              <span className="pointer-events-none select-none text-white drop-shadow-sm">
                {item.icon}
              </span>
            </Link>

            <div className="pointer-events-none absolute right-[110%] top-1/2 hidden -translate-y-1/2 translate-x-2 flex-col items-end gap-1 rounded-2xl border border-white/10 bg-card/80 px-4 py-2 text-right text-xs font-semibold text-foreground opacity-0 shadow-lg backdrop-blur transition-all duration-500 group-hover:flex group-hover:translate-x-0 group-hover:opacity-100">
              <span className="uppercase tracking-[0.25em] text-foreground/50">{item.description}</span>
              <span className="text-sm font-semibold text-primary/90">{item.label}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}


