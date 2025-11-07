"use client"

import SparkleBackground from "@/components/sparkle-background"

const processSteps = [
  {
    step: "01",
    title: "Thu Hoạch Thủ Công",
    description: "Mỗi tổ yến được thu hoạch cẩn thận bằng tay, đảm bảo không làm tổn hại đến cấu trúc tự nhiên và giá trị dinh dưỡng.",
    icon: "✋",
  },
  {
    step: "02",
    title: "Tuyển Chọn Tinh Túy",
    description: "Chỉ những tổ yến đạt tiêu chuẩn cao nhất mới được chọn lọc, loại bỏ hoàn toàn tạp chất và đảm bảo độ tinh khiết.",
    icon: "🔍",
  },
  {
    step: "03",
    title: "Chế Biến Tận Tâm",
    description: "Mỗi sợi yến được chế biến thủ công tại nhà với sự tỉ mỉ, giữ nguyên hương vị và dưỡng chất tự nhiên. Quy trình đơn giản nhưng cẩn thận, đảm bảo an toàn vệ sinh thực phẩm.",
    icon: "⚙️",
  },
  {
    step: "04",
    title: "Đóng Gói Cẩn Thận",
    description: "Sản phẩm được đóng gói kỹ lưỡng tại nhà, đảm bảo chất lượng và độ tươi ngon từ tay người làm đến tay người tiêu dùng. Mỗi gói yến đều được kiểm tra cẩn thận trước khi giao hàng.",
    icon: "📦",
  },
]

export default function ProcessStory() {
  return (
    <section className="relative overflow-hidden bg-card/30 py-24 md:py-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>
      <SparkleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 dark:bg-accent/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-accent dark:text-accent/90 backdrop-blur mb-6">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            Chương 2: Quy Trình
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-6">
            Nghệ Thuật Chế Biến
          </h2>
          <p className="text-lg text-foreground/90 dark:text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Mỗi bước trong quy trình đều được thực hiện với sự tỉ mỉ và tâm huyết, 
            đảm bảo từng sợi yến giữ nguyên giá trị dinh dưỡng quý giá.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((item, index) => (
            <div
              key={index}
              className="group relative animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-full rounded-2xl border-2 border-accent/30 dark:border-accent/20 bg-gradient-to-br from-card/80 via-card/60 to-background/40 p-8 backdrop-blur-lg shadow-sm transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2">
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center text-2xl font-bold text-primary dark:text-accent/80 backdrop-blur">
                  {item.step}
                </div>

                <div className="space-y-6">
                  <div className="text-5xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {item.icon}
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground/80 dark:text-foreground/70 leading-relaxed group-hover:text-foreground/95 dark:group-hover:text-foreground/90 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Connection Line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-y-1/2 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(212,165,116,0.3)_25%,rgba(212,165,116,0.5)_50%,rgba(212,165,116,0.3)_75%,transparent_100%)] animate-shimmer"></div>
        </div>
      </div>
    </section>
  )
}

