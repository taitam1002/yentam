"use client"

/// <reference types="react" />

import { useState } from "react"
import SparkleBackground from "@/components/sparkle-background"

export default function BenefitsSection() {
  const [touchedItems, setTouchedItems] = useState<Set<number>>(new Set())
  const benefits = [
    {
      icon: "💪",
      title: "Tăng cường sức khỏe",
      shortDescription: "Giàu dinh dưỡng, giúp tăng cường miễn dịch và sức khỏe tổng thể",
      detailedDescription: "Yến sào Yến Tâm chứa hơn 18 loại axit amin thiết yếu, cùng với các khoáng chất quan trọng như canxi, sắt, kẽm và magie. Đặc biệt, hàm lượng protein cao (chiếm 50-60% trọng lượng) giúp bổ sung năng lượng, phục hồi sức khỏe nhanh chóng sau bệnh tật hoặc vận động mạnh. Các thành phần như Threonine và Glycine hỗ trợ tăng cường hệ miễn dịch, giúp cơ thể chống lại bệnh tật hiệu quả hơn.",
      highlights: [
        "18+ loại axit amin thiết yếu",
        "Tăng cường hệ miễn dịch tự nhiên",
        "Phục hồi sức khỏe nhanh chóng",
      ],
      gradient: "from-emerald-500/20 via-emerald-400/10 to-transparent",
    },
    {
      icon: "✨",
      title: "Làm đẹp da",
      shortDescription: "Hỗ trợ làm sáng da, giảm nếp nhăn và duy trì vẻ trẻ trung",
      detailedDescription: "Collagen tự nhiên trong yến sào kích thích sản sinh tế bào da mới, giúp da trở nên mịn màng và đàn hồi hơn. Threonine trong yến sào thúc đẩy quá trình sản xuất collagen và elastin, làm chậm quá trình lão hóa da. Các chất chống oxy hóa mạnh mẽ giúp bảo vệ da khỏi tác hại của tia UV và môi trường, đồng thời làm mờ các vết thâm, nám và tàn nhang. Sử dụng thường xuyên giúp da sáng khỏe từ bên trong.",
      highlights: [
        "Kích thích sản sinh collagen",
        "Làm chậm quá trình lão hóa",
        "Bảo vệ da khỏi tia UV",
      ],
      gradient: "from-amber-500/20 via-amber-400/10 to-transparent",
    },
    {
      icon: "🌿",
      title: "100% Tự nhiên",
      shortDescription: "Không chứa hóa chất, hoàn toàn tự nhiên và an toàn cho sức khỏe",
      detailedDescription: "Mỗi sợi yến tại Yến Tâm đều được thu hoạch từ những hang đá tự nhiên tại Bình Phước, nơi chim yến sống hoàn toàn tự do trong môi trường không ô nhiễm. Quy trình chế biến của chúng tôi không sử dụng bất kỳ chất bảo quản, phụ gia hay hóa chất nào. Sản phẩm được kiểm nghiệm và đạt chứng nhận an toàn thực phẩm, phù hợp cho mọi lứa tuổi, kể cả phụ nữ mang thai và trẻ em.",
      highlights: [
        "Không chất bảo quản",
        "Đạt chứng nhận an toàn thực phẩm",
        "Phù hợp mọi lứa tuổi",
      ],
      gradient: "from-lime-500/20 via-lime-400/10 to-transparent",
    },
    {
      icon: "🏆",
      title: "Chất lượng cao",
      shortDescription: "Đảm bảo chất lượng và giá trị dinh dưỡng cao từ thiên nhiên",
      detailedDescription: "Yến Tâm tuân thủ nghiêm ngặt quy trình tuyển chọn, chỉ chấp nhận những tổ yến đạt tiêu chuẩn cao nhất về độ tinh khiết và giá trị dinh dưỡng. Mỗi sản phẩm đều được kiểm tra kỹ lưỡng về chất lượng, độ ẩm và tạp chất. Chúng tôi cam kết không pha trộn, không làm giả, đảm bảo 100% yến sào nguyên chất. Quy trình chế biến thủ công tại nhà được thực hiện với sự tỉ mỉ và tâm huyết, đảm bảo an toàn vệ sinh thực phẩm và chất lượng tốt nhất.",
      highlights: [
        "Tuyển chọn tổ yến cao cấp",
        "Chế biến thủ công tại nhà",
        "100% yến sào nguyên chất",
      ],
      gradient: "from-rose-500/20 via-rose-400/10 to-transparent",
    },
  ]

  return (
    <section id="benefits" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,165,116,0.05),transparent_70%)]"></div>
      </div>
      <SparkleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 dark:bg-accent/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-accent dark:text-accent/90 backdrop-blur mb-6">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            Lợi Ích Vượt Trội
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-6">
            Lợi Ích Nổi Bật
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed text-justify">
            Yến sào Yến Tâm không chỉ là một món ăn bổ dưỡng, mà còn là giải pháp toàn diện 
            cho sức khỏe và sắc đẹp của bạn. Mỗi sợi yến đều chứa đựng những giá trị dinh dưỡng 
            quý giá được thiên nhiên ban tặng.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl border-2 border-accent/30 bg-gradient-to-br from-card/80 via-card/60 to-background/40 backdrop-blur-lg transition-all duration-500 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 animate-scale-in h-full ${
                touchedItems.has(index) ? 'scale-[1.02] shadow-2xl shadow-accent/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onTouchStart={() => setTouchedItems(prev => new Set(prev).add(index))}
              onTouchEnd={() => setTouchedItems(prev => {
                const newSet = new Set(prev)
                newSet.delete(index)
                return newSet
              })}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

              <div className="relative p-8 md:p-10 space-y-6">
                {/* Header with icon and title */}
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center text-4xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                    {benefit.icon}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary group-hover:text-accent transition-colors duration-300 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-foreground/70 text-justify group-hover:text-foreground/90 transition-colors duration-300 leading-relaxed">
                      {benefit.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Detailed description */}
                <div className="space-y-4 pt-4 border-t border-accent/20">
                  <p className="text-sm md:text-base text-foreground/80 leading-relaxed text-justify group-hover:text-foreground/95 transition-colors duration-300">
                    {benefit.detailedDescription}
                  </p>
                </div>

                {/* Highlights */}
                <div className="grid gap-3 pt-4">
                  {benefit.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-xl border border-accent/20 bg-background/50 px-4 py-3 backdrop-blur transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/5"
                    >
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                      <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p className="text-lg text-foreground/70 mb-6 text-justify">
            Trải nghiệm ngay những lợi ích tuyệt vời từ yến sào Yến Tâm
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/products"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-accent to-accent/80 px-8 py-4 font-semibold text-primary transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/30"
            >
              <span className="relative z-10">Khám Phá Sản Phẩm</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
