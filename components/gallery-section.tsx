"use client"

import { useState } from "react"
import SparkleBackground from "@/components/sparkle-background"
import ContactDialog from "@/components/contact-dialog"

export default function GallerySection() {
  const [contactDialogOpen, setContactDialogOpen] = useState(false)
  const [touchedItems, setTouchedItems] = useState<Set<number>>(new Set())
  const products = [
    {
      id: 1,
      title: "Tinh Chế - Loại 1",
      description: "Gồm những sợi yến dài, trắng ngần, được tuyển chọn tỉ mỉ để giữ trọn độ tinh khiết và giá trị dinh dưỡng cao.",
      image: "/toyen.png",
      price: "2.300.000₫",
    },
    {
      id: 2,
      title: "Tinh Chế - Loại 2",
      description: "Kết hợp giữa sợi yến nguyên và sợi vụn, hài hòa giữa chất lượng và giá trị, vẫn đảm bảo dưỡng chất dồi dào và hương vị tự nhiên.",
      image: "/toyen.png",
      price: "2.000.000₫",
    },
    {
      id: 3,
      title: "Tinh Chế - Loại 3",
      description: "Từ những sợi yến vụn tự nhiên, vẫn giữ nguyên độ thơm ngon, thích hợp để chưng sẵn, nấu cháo hay làm yến tươi tiện lợi.",
      image: "/toyen.png",
      price: "1.800.000₫",
    },
    {
      id: 4,
      title: "Tổ Thô",
      description: "Tổ yến nguyên bản chưa tinh chế, giữ trọn hương vị tự nhiên và dinh dưỡng tinh túy từ thiên nhiên",
      image: "/Screenshot 2025-11-02 213120.png",
      price: "1.300.000₫",
    },
  ]

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <SparkleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/80 bg-accent/10 dark:bg-accent/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-accent dark:text-accent/90 backdrop-blur mb-6">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            Bộ Sưu Tập
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-6">
            Dòng Sản Phẩm
          </h2>
          <p className="text-lg md:text-xl text-foreground/90 dark:text-foreground/80 max-w-3xl mx-auto leading-relaxed text-justify">
            Khám phá bộ sưu tập yến sào đa dạng, được tuyển chọn kỹ lưỡng từ những tổ yến chất lượng cao nhất, 
            phù hợp với mọi nhu cầu và ngân sách của bạn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative overflow-hidden rounded-3xl border-2 border-accent/70 dark:border-accent/60 bg-gradient-to-br from-card/80 via-card/60 to-background/40 backdrop-blur-lg shadow-lg hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-2 animate-scale-in cursor-pointer flex flex-col h-full ${touchedItems.has(product.id) ? 'scale-[1.02] shadow-2xl shadow-accent/20' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onTouchStart={() => setTouchedItems(prev => new Set(prev).add(product.id))}
              onTouchEnd={() => setTouchedItems(prev => {
                const newSet = new Set(prev)
                newSet.delete(product.id)
                return newSet
              })}
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className={`w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110 ${touchedItems.has(product.id) ? 'scale-110' : ''}`}
                />
              </div>

              {/* Content */}
              <div className="relative p-6 md:p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-accent group-hover:text-accent transition-colors duration-300 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-sm md:text-base text-foreground/80 dark:text-foreground/70 leading-relaxed text-justify group-hover:text-foreground/95 dark:group-hover:text-foreground/90 transition-colors duration-300">
                    {product.description}
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-accent/60 dark:border-accent/50">
                  <div className="flex items-baseline justify-between mb-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-foreground/50 dark:text-foreground/60 mb-1">Giá</p>
                      <p className="text-2xl md:text-3xl font-bold text-accent">{product.price}</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setContactDialogOpen(true)}
                    className="group/btn relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary/90 px-6 py-4 font-semibold text-primary-foreground transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span>Liên hệ ngay</span>
                      <span className="transition-transform duration-500 group-hover/btn:translate-x-1">→</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <ContactDialog open={contactDialogOpen} onOpenChange={setContactDialogOpen} />
    </section>
  )
}
