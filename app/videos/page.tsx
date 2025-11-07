"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import SparkleBackground from "@/components/sparkle-background"

export default function VideosPage() {
  const videos = [
    {
      url: "/qc-yen_tam.mp4",
      title: "Video giới thiệu Yến Tâm",
      type: "local" as const,
    },
  ]

  return (
    <main className="w-full">
      <Header />
      <section className="py-24 md:py-32 bg-background relative overflow-hidden min-h-[80vh]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>
        <SparkleBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 dark:bg-accent/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-accent dark:text-accent/90 backdrop-blur mb-6">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              Video Giới Thiệu
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-6">
              Video Yến Tâm
            </h1>
            <p className="text-lg text-foreground/90 dark:text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Khám phá quy trình sản xuất và những câu chuyện đằng sau từng sản phẩm yến sào cao cấp của chúng tôi
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {videos.map((video, index) => {
              const isLocalVideo = video.type === "local" || video.url.startsWith("/") || video.url.match(/\.(mp4|webm|mov)$/i)
              
              return (
                <div
                  key={index}
                  className="bg-card rounded-3xl overflow-hidden shadow-2xl hover:shadow-accent/20 border-2 border-accent/30 hover:border-accent transition-all duration-500 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {isLocalVideo ? (
                    <div className="w-full">
                      <video
                        src={video.url}
                        controls
                        preload="auto"
                        playsInline
                        className="w-full h-auto rounded-3xl"
                        style={{ maxHeight: "600px", minHeight: "400px" }}
                        title={video.title}
                      >
                        <source src={video.url} type="video/mp4" />
                        Trình duyệt của bạn không hỗ trợ video HTML5.
                      </video>
                    </div>
                  ) : (
                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                      <iframe
                        src={video.url}
                        title={video.title}
                        className="absolute top-0 left-0 w-full h-full border-0 rounded-3xl"
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
