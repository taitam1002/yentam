"use client"

import SparkleBackground from "@/components/sparkle-background"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-card/30 relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
      <SparkleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-left flex flex-col justify-center">
            <div className="space-y-4">
              <p className="text-primary dark:text-accent font-semibold text-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Chào mừng đến với
              </p>
              <h1
                className="text-5xl md:text-6xl font-bold text-primary dark:text-accent text-balance animate-slide-up leading-tight"
                style={{ animationDelay: "0.2s" }}
              >
                Yến Tâm
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-balance animate-slide-up" style={{ animationDelay: "0.3s" }}>
                Yến Sào Cao Cấp
              </h2>
            </div>

            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <p className="text-lg text-foreground/90 dark:text-foreground/80 leading-relaxed text-justify">
                Trong hành trình tìm kiếm những giá trị thuần khiết từ thiên nhiên, chúng tôi đã khám phá ra vẻ đẹp và sức mạnh của yến sào – món quà quý giá mà thiên nhiên ban tặng.
              </p>
              <p className="text-lg text-foreground/90 dark:text-foreground/80 leading-relaxed text-justify">
                Từ những hang đá tự nhiên tại <span className="font-semibold text-primary dark:text-accent">Bình Phước</span>, đến bàn tay bạn, mỗi sợi yến đều mang trong mình một câu chuyện về sự tận tâm, chất lượng và niềm tin.
              </p>
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
