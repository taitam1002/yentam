"use client"

import SparkleBackground from "@/components/sparkle-background"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-card/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
      <SparkleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-left flex flex-col justify-center">
            <div className="space-y-3">
              <p className="text-accent font-semibold text-lg animate-fade-in">Chào mừng đến với</p>
              <h1
                className="text-5xl md:text-6xl font-bold text-accent text-balance animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                Yến Tâm
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-balance">Yến Sào Cao Cấp</h2>
              <p
                className="text-lg text-foreground/80 text-balance leading-relaxed animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
               Yến sào 100% nguyên chất từ Bình Phước, được tuyển chọn tinh túy và chế biến theo quy trình chuẩn mực, mang đến chất lượng thuần khiết và giá trị dinh dưỡng vượt trội.
              </p>
            </div>

            <div className="flex gap-8 pt-6 animate-slide-up" style={{ animationDelay: "0.6s" }}>
              <div className="group hover:scale-110 active:scale-110 transition-transform duration-300">
                <p className="text-3xl font-bold text-accent">100%</p>
                <p className="text-sm text-foreground/70">Tự nhiên</p>
              </div>
              <div className="group hover:scale-110 active:scale-110 transition-transform duration-300">
                <p className="text-3xl font-bold text-accent">2+</p>
                <p className="text-sm text-foreground/70">Năm kinh nghiệm</p>
              </div>
              <div className="group hover:scale-110 active:scale-110 transition-transform duration-300">
                <p className="text-3xl font-bold text-accent">200+</p>
                <p className="text-sm text-foreground/70">Khách hàng hài lòng</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center items-center animate-slide-right">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-accent/50 blur-2xl animate-pulse-glow"></div>
              <div className="absolute inset-0 rounded-full bg-card flex items-center justify-center overflow-hidden shadow-2xl border-4 border-accent/30 hover:border-accent/60 active:border-accent/60 transition-all duration-300">
                <img
                  src="/IMG_6388 copy.jpg"
                  alt="Yến sào Yến Tâm"
                  className="w-full h-full object-cover hover:scale-110 active:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
