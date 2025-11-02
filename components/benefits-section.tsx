"use client"

/// <reference types="react" />

import SparkleBackground from "@/components/sparkle-background"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: "💪",
      title: "Tăng cường sức khỏe",
      description: "Giàu dinh dưỡng, giúp tăng cường miễn dịch và sức khỏe tổng thể",
    },
    {
      icon: "✨",
      title: "Làm đẹp da",
      description: "Hỗ trợ làm sáng da, giảm nếp nhăn và duy trì vẻ trẻ trung",
    },
    {
      icon: "🌿",
      title: "100% Tự nhiên",
      description: "Không chứa hóa chất, hoàn toàn tự nhiên và an toàn cho sức khỏe",
    },
    {
      icon: "🏆",
      title: "Chất lượng cao",
      description: "Đảm bảo chất lượng và giá trị dinh dưỡng cao từ thiên nhiên",
    },
  ]

  return (
    <section id="benefits" className="py-20 bg-background relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">Lợi Ích Nổi Bật</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Yến Tâm mang lại nhiều lợi ích tuyệt vời cho sức khỏe và sắc đẹp của bạn
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-xl border-2 border-accent/30 hover:border-accent shadow-md hover:shadow-xl hover:shadow-accent/20 transition-all duration-500 text-center space-y-4 cursor-pointer transform hover:-translate-y-2 animate-scale-in h-full flex flex-col justify-between"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl group-hover:scale-125 transition-transform duration-300">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-sm text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
