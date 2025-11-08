"use client"

import SparkleBackground from "@/components/sparkle-background"

export default function OriginStory() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <SparkleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1 animate-slide-left">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="relative rounded-3xl overflow-hidden border-4 border-accent/60 shadow-2xl">
                <img
                  src="/1.jpg"
                  alt="Nguồn gốc yến sào Bình Phước"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 order-1 lg:order-2 animate-slide-right">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/80 bg-accent/10 dark:bg-accent/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-accent dark:text-accent/90 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              Chương 1: Nguồn Gốc
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-accent leading-tight">
              Từ Thiên Nhiên<br />
              <span className="text-foreground">Đến Bàn Tay Bạn</span>
            </h2>

            <div className="space-y-6 text-lg text-foreground/90 dark:text-foreground/80 leading-relaxed">
              <p className="text-justify">
                Hành trình của Yến Tâm bắt đầu từ những hang đá tự nhiên tại <span className="font-semibold text-primary dark:text-accent">Bình Phước</span> - vùng đất được thiên nhiên ưu ái với khí hậu lý tưởng cho loài yến sinh trưởng.
              </p>
              <p className="text-justify">
                Tại đây, từng tổ yến được hình thành bởi những con chim yến thuần khiết, sống trong môi trường hoàn toàn tự nhiên, không có sự can thiệp của con người. Mỗi sợi yến là kết tinh của nước bọt giàu dinh dưỡng, được tạo nên qua hàng trăm giờ bay lượn và kiếm ăn.
              </p>
              <p className="font-semibold text-primary dark:text-primary text-justify">
                Chúng tôi tin rằng, chỉ có nguồn nguyên liệu thuần khiết nhất mới tạo nên những sản phẩm giá trị nhất.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3 rounded-xl border border-accent/70 dark:border-accent/60 bg-card/80 dark:bg-card/50 px-6 py-4 backdrop-blur shadow-sm">
                <div>
                  <p className="text-sm text-foreground/70 dark:text-foreground/60">Nguồn gốc</p>
                  <p className="font-semibold text-primary dark:text-accent">Bình Phước</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-accent/70 dark:border-accent/60 bg-card/80 dark:bg-card/50 px-6 py-4 backdrop-blur shadow-sm">
                <div>
                  <p className="text-sm text-foreground/70 dark:text-foreground/60">Chất lượng</p>
                  <p className="font-semibold text-primary dark:text-accent">100% Tự nhiên</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

