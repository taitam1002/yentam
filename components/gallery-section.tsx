"use client"

import { useState } from "react"
import SparkleBackground from "@/components/sparkle-background"
import ContactDialog from "@/components/contact-dialog"

export default function GallerySection() {
  const [contactDialogOpen, setContactDialogOpen] = useState(false)
  const products = [
    {
      id: 1,
      title: "Tinh Chế - Loại 1",
      description: "Gồm những sợi yến dài, trắng ngần, được tuyển chọn tỉ mỉ để giữ trọn độ tinh khiết và giá trị dinh dưỡng cao.",
      image: "/IMG_6388 copy.jpg",
      price: "2.300.000₫",
    },
    {
      id: 2,
      title: "Tinh Chế - Loại 2",
      description: "Kết hợp giữa sợi yến nguyên và sợi vụn, hài hòa giữa chất lượng và giá trị, vẫn đảm bảo dưỡng chất dồi dào và hương vị tự nhiên.",
      image: "/IMG_6388 copy.jpg",
      price: "2.000.000₫",
    },
    {
      id: 3,
      title: "Tinh Chế - Loại 3",
      description: "Từ những sợi yến vụn tự nhiên, vẫn giữ nguyên độ thơm ngon, thích hợp để chưng sẵn, nấu cháo hay làm yến tươi tiện lợi.",
      image: "/IMG_6388 copy.jpg",
      price: "1.800.000₫",
    },
    {
      id: 4,
      title: "Tổ Thô",
      description: "Tổ yến nguyên bản chưa tinh chế, giữ trọn hương vị tự nhiên và dinh dưỡng tinh túy từ thiên nhiên",
      image: "/IMG_6388 copy.jpg",
      price: "1.300.000₫",
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      <SparkleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">Dòng Sản Phẩm</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Khám phá bộ sưu tập yến sào đa dạng, phù hợp với nhu cầu và ngân sách của bạn
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 border-2 border-accent/30 transform hover:-translate-y-2 animate-slide-up cursor-pointer flex flex-col h-full"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-64 overflow-hidden bg-primary/5">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300 mb-3">
                  {product.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300 flex-grow mb-4">
                  {product.description}
                </p>

                <div className="pt-4 border-t border-accent/20 mt-auto">
                  <p className="text-2xl font-bold text-accent mb-4">{product.price}</p>
                  <button
                    onClick={() => setContactDialogOpen(true)}
                    className="w-full px-4 py-3 bg-primary text-card font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
                  >
                    Liên hệ ngay
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
