"use client"

import SparkleBackground from "@/components/sparkle-background"
import Link from "next/link"

const commitments = [
  {
    number: "100%",
    label: "Nguyên chất tự nhiên",
    description: "Không pha trộn, không chất bảo quản",
  },
  {
    number: "2+",
    label: "Năm kinh nghiệm",
    description: "Tích lũy kiến thức và kỹ năng",
  },
  {
    number: "200+",
    label: "Khách hàng hài lòng",
    description: "Niềm tin và sự ủng hộ của cộng đồng",
  },
]

export default function CommitmentStory() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <SparkleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/80 bg-accent/10 dark:bg-accent/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-accent dark:text-accent/90 backdrop-blur mb-6">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            Chương Cuối: Cam Kết
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-6">
            Lời Hứa Của Chúng Tôi
          </h2>
          <p className="text-lg text-foreground/90 dark:text-foreground/80 max-w-3xl mx-auto leading-relaxed text-justify">
            Mỗi sản phẩm Yến Tâm là kết quả của sự kết hợp giữa thiên nhiên thuần khiết, 
            quy trình chế biến chuẩn mực và tâm huyết phục vụ khách hàng.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {commitments.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border-2 border-accent/70 dark:border-accent/60 bg-gradient-to-br from-card/80 via-card/60 to-background/40 p-8 text-center backdrop-blur-lg shadow-sm transition-all duration-500 hover:border-accent/80 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative space-y-4">
                <div className="text-5xl md:text-6xl font-bold text-primary dark:text-accent transition-transform duration-500 group-hover:scale-110">
                  {item.number}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                    {item.label}
                  </h3>
                  <p className="text-sm text-foreground/80 dark:text-foreground/70 text-center group-hover:text-foreground/95 dark:group-hover:text-foreground/90 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative rounded-3xl border-2 border-accent/70 bg-gradient-to-br from-card/80 via-card/60 to-background/40 p-12 md:p-16 text-center backdrop-blur-lg shadow-2xl overflow-hidden animate-scale-in" style={{ animationDelay: "0.5s" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,165,116,0.15),transparent_70%)]"></div>
          
          <div className="relative space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-primary dark:text-accent">
              Sẵn Sàng Trải Nghiệm Yến Tâm?
            </h3>
            <p className="text-lg text-foreground/90 dark:text-foreground/80 max-w-2xl mx-auto leading-relaxed text-justify">
              Khám phá bộ sưu tập yến sào cao cấp của chúng tôi và cảm nhận sự khác biệt 
              từ những sản phẩm được chọn lọc kỹ lưỡng.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/products"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-accent to-accent/80 px-8 py-4 font-semibold text-primary transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/30"
              >
                <span className="relative z-10">Xem Sản Phẩm</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
              <Link
                href="/menu"
                className="group relative overflow-hidden rounded-xl border-2 border-accent/80 bg-card/50 px-8 py-4 font-semibold text-accent backdrop-blur transition-all duration-500 hover:border-accent hover:bg-accent/10 hover:scale-105"
              >
                <span className="relative z-10">Xem Thực Đơn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

