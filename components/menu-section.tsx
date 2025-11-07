"use client"

/// <reference types="react" />

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import SparkleBackground from "@/components/sparkle-background"
import ContactDialog from "@/components/contact-dialog"

export default function MenuSection() {
  const [contactDialogOpen, setContactDialogOpen] = useState(false)
  const nourishingProducts = [
    {
      size: "75ml",
      label: "Yen",
      labelColor: "bg-green-400",
      title: "Bồi Bổ Hằng Ngày",
      description: "8gr yến tươi, lý tưởng để bồi bổ nhẹ nhàng",
      image: "/1.png",
      options: [
        { name: "Yến chưng truyền thống (tùy chọn 1 vị)", price: "60.000₫" },
        { name: "Yến chưng Mix vị (tùy chọn 2-3 vị)", price: "65.000₫" },
        { name: "Yến chưng Đông trùng hạ thảo", price: "70.000₫" },
      ],
    },
    {
      size: "150ml",
      label: "Yen",
      labelColor: "bg-green-600",
      title: "Bồi Bổ Chuyên Sâu",
      description: "16gr yến tươi, phục hồi sức khỏe & quà tặng sang trọng",
      image: "/2.png",
      options: [
        { name: "Yến chưng truyền thống (tùy chọn 1 vị)", price: "120.000₫" },
        { name: "Yến chưng Mix vị (tùy chọn 2-3 vị)", price: "130.000₫" },
        { name: "Yến chưng Đông trùng hạ thảo", price: "140.000₫" },
      ],
    },
  ]

  const specialProducts = [
    {
      size: "150ml",
      label: "Yen Da",
      labelColor: "bg-yellow-300",
      title: "Nước Yến Giải Khát",
      description: "8gr yến tươi, giải khát thanh mát ngày hè",
      image: "/3.png",
      options: [
        { name: "Nước Yến chưng Lá dứa Hạt chia", price: "70.000₫" },
        { name: "Nước Yến chưng Mix vị (tùy chọn 2-3 vị)", price: "75.000₫" },
      ],
    },
    {
      size: "75ml",
      label: "Yen Be",
      labelColor: "bg-yellow-500",
      title: "Yến Cho Bé",
      description: "6gr yến tươi, dinh dưỡng tuyệt vời cho con yêu",
      image: "/Screenshot_2025-11-02_172333-removebg-preview.png",
      options: [{ name: "Yến chưng đường phèn", price: "50.000₫" }],
    },
  ]

  const flavors = [
    "Đường phèn",
    "Lá dứa",
    "Gừng",
    "Táo đỏ",
    "Kỷ tử",
    "Hạt chia",
    "Hạt sen",
  ]

  const combos = [
    {
      title: "Combo Dùng Thử",
      hot: true,
      content: "1 hũ Yến chưng Hạt sen Táo đỏ (75ml) + 1 hũ Nước Yến chưng Lá dứa Hạt chia (150ml)",
      originalPrice: "135.000₫",
      price: "120.000₫",
    },
    {
      title: "Combo Cả Nhà Vui Khỏe",
      hot: true,
      content: "1 hũ Yến chưng Bồi bổ Chuyên sâu (150ml) + 1 hũ Yến chưng cho Bé (75ml)",
      originalPrice: "180.000₫",
      price: "160.000₫",
    },
    {
      title: "Combo Dùng Trong Tuần",
      hot: true,
      content: "Mua 10 hũ Yến chưng Bồi bổ Hằng ngày (75ml), tặng 1 hũ cùng loại",
      originalPrice: null,
      price: "600.000₫",
    },
  ]

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      <SparkleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 dark:bg-accent/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-accent dark:text-accent/90 backdrop-blur mb-6">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            Thực Đơn
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-4">Yến Chưng Tươi</h2>
          <p className="text-lg text-foreground/90 dark:text-foreground/80 max-w-2xl mx-auto">
            Vị ngon từ thiên nhiên, sức khỏe cho gia đình bạn
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12 items-start">
          {/* Yến Chưng Bồi Bổ */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary dark:text-accent mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-accent rounded"></span>
              Yến Chưng Bồi Bổ
            </h3>
            {nourishingProducts.map((product, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border-2 border-accent/30 p-6 hover:border-accent shadow-md hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-4 mb-4">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-primary dark:text-accent mb-1">{product.title}</h4>
                    <p className="text-sm text-foreground/70 dark:text-foreground/60 mb-2">(Hũ {product.size})</p>
                    <p className="text-sm text-foreground/80 dark:text-foreground/70">{product.description}</p>
                  </div>
                </div>
                <div className="space-y-2 mt-4">
                  {product.options.map((option, optIndex) => (
                    <div
                      key={optIndex}
                      className="flex justify-between items-center p-3 bg-background rounded-lg hover:bg-accent/5 transition-colors"
                    >
                      <span className="text-sm text-foreground/80 dark:text-foreground/90 flex-1">{option.name}</span>
                      <span className="font-bold text-accent ml-4">{option.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Yến Chưng Đặc Biệt */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary dark:text-accent mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-accent rounded"></span>
              Yến Chưng Đặc Biệt
            </h3>
            {specialProducts.map((product, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border-2 border-accent/30 p-6 hover:border-accent shadow-md hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="flex gap-4 mb-4">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-primary dark:text-accent mb-1">{product.title}</h4>
                    <p className="text-sm text-foreground/70 dark:text-foreground/60 mb-2">(Hũ {product.size})</p>
                    <p className="text-sm text-foreground/80 dark:text-foreground/70">{product.description}</p>
                  </div>
                </div>
                <div className="space-y-2 mt-4">
                  {product.options.map((option, optIndex) => (
                    <div
                      key={optIndex}
                      className="flex justify-between items-center p-3 bg-background rounded-lg hover:bg-accent/5 transition-colors"
                    >
                      <span className="text-sm text-foreground/80 dark:text-foreground/90 flex-1">{option.name}</span>
                      <span className="font-bold text-accent ml-4">{option.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Các Vị Chưng Kèm */}
            <div className="bg-card rounded-xl border-2 border-accent/30 p-6 mt-6">
              <h4 className="font-bold text-lg text-primary dark:text-accent mb-4">Các Vị Chưng Kèm</h4>
              <div className="flex flex-wrap gap-2">
                {flavors.map((flavor, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="px-4 py-2 text-sm border-accent/30 hover:border-accent hover:bg-accent/10 transition-colors cursor-default"
                  >
                    {flavor}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Combo Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-primary dark:text-accent mb-8 text-center flex items-center justify-center gap-3">
            <span className="w-1 h-8 bg-accent rounded"></span>
            Combo Tiết Kiệm & Tối Ưu
            <span className="w-1 h-8 bg-accent rounded"></span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {combos.map((combo, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border-2 border-accent/30 p-6 relative hover:border-accent active:border-accent shadow-lg hover:shadow-xl active:shadow-xl transition-all duration-300 transform hover:-translate-y-2 active:-translate-y-2 animate-scale-in flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {combo.hot && (
                  <div className="absolute -top-3 -right-3">
                    <Badge className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      HOT
                    </Badge>
                  </div>
                )}
                <h4 className="font-bold text-lg text-primary dark:text-accent mb-4">{combo.title}</h4>
                {combo.title === "Combo Dùng Trong Tuần" ? (
                  <p className="text-sm text-foreground/80 dark:text-foreground/70 mb-4 leading-relaxed flex-grow">
                    Mua 10 hũ Yến chưng Bồi bổ Hằng ngày (75ml),{" "}
                    <span className="font-bold text-accent text-base">tặng 1 hũ cùng loại</span> 
                  </p>
                ) : (
                  <p className="text-sm text-foreground/80 dark:text-foreground/70 mb-4 leading-relaxed flex-grow">{combo.content}</p>
                )}
                <div className="pt-4 border-t border-accent/20 mt-auto">
                  {combo.originalPrice ? (
                    <>
                      <p className="text-sm text-foreground/60 dark:text-foreground/50 line-through mb-2">
                        Giá gốc: {combo.originalPrice}
                      </p>
                      <p className="text-2xl font-bold text-accent mb-4">{combo.price}</p>
                    </>
                  ) : (
                    <div className="mb-2">
                      <p className="text-sm text-foreground/50 opacity-0">Giá gốc:</p>
                      <p className="text-2xl font-bold text-accent mb-4">{combo.price}</p>
                    </div>
                  )}
                  <button
                    onClick={() => setContactDialogOpen(true)}
                    className="w-full px-4 py-3 bg-primary text-card font-semibold rounded-lg hover:bg-primary/90 active:bg-primary/90 transition-all duration-300 transform hover:scale-105 active:scale-105 hover:shadow-lg active:shadow-lg hover:shadow-accent/30 active:shadow-accent/30"
                  >
                    Liên hệ ngay
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <ContactDialog open={contactDialogOpen} onOpenChange={setContactDialogOpen} />
    </section>
  )
}

