"use client"

import SparkleBackground from "@/components/sparkle-background"

const values = [
  {
    title: "Tinh Túy",
    description: "Chỉ chọn lọc những tổ yến chất lượng cao nhất, đảm bảo độ tinh khiết và giá trị dinh dưỡng tối đa.",
    icon: "💎",
    color: "from-amber-500/20 to-amber-600/10",
  },
  {
    title: "Tận Tâm",
    description: "Mỗi sản phẩm đều được chế biến với tâm huyết, mang đến trải nghiệm tốt nhất cho khách hàng.",
    icon: "❤️",
    color: "from-rose-500/20 to-rose-600/10",
  },
  {
    title: "Tin Cậy",
    description: "Cam kết minh bạch về nguồn gốc, quy trình và chất lượng sản phẩm, xây dựng niềm tin lâu dài.",
    icon: "🤝",
    color: "from-emerald-500/20 to-emerald-600/10",
  },
]

export default function ValuesStory() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <SparkleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8 animate-slide-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/80 bg-accent/10 dark:bg-accent/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-accent dark:text-accent/90 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              Chương 3: Giá Trị
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-accent leading-tight">
              Những Giá Trị<br />
              <span className="text-foreground">Chúng Tôi Theo Đuổi</span>
            </h2>

            <p className="text-lg text-foreground/90 dark:text-foreground/80 leading-relaxed text-justify">
              Yến Tâm không chỉ là một thương hiệu, mà là một cam kết về chất lượng, 
              sự tận tâm và niềm tin. Chúng tôi tin rằng mỗi sản phẩm phải mang trong mình 
              những giá trị cốt lõi này để thực sự phục vụ tốt nhất cho sức khỏe và sắc đẹp của bạn.
            </p>

            <div className="grid gap-6 pt-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-accent/70 dark:border-accent/60 bg-gradient-to-br from-card/80 dark:from-card/60 to-background/40 p-6 backdrop-blur-lg shadow-sm transition-all duration-500 hover:border-accent/80 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                      {value.icon}
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-sm text-foreground/80 dark:text-foreground/70 leading-relaxed text-justify group-hover:text-foreground/95 dark:group-hover:text-foreground/90 transition-colors duration-300">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative animate-slide-right">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="relative rounded-3xl overflow-hidden border-4 border-accent/60 shadow-2xl">
                <img
                  src="/2.jpg"
                  alt="Giá trị Yến Tâm"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

