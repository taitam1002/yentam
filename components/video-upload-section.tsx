"use client"

/// <reference types="react" />

import SparkleBackground from "@/components/sparkle-background"

interface VideoItem {
  url: string
  title: string
  type?: "local" | "url"
}

interface VideoUploadSectionProps {
  videos: VideoItem[]
  setVideos: (videos: VideoItem[]) => void
}

export default function VideoUploadSection({ videos }: VideoUploadSectionProps) {
  if (!videos || videos.length === 0) {
    return null
  }

  return (
    <section id="videos" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
      <SparkleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">Video Giới Thiệu</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Khám phá quy trình sản xuất và những câu chuyện đằng sau từng sản phẩm yến sào cao cấp của chúng tôi
          </p>
        </div>

        {/* Videos Display */}
        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {videos.map((video, index) => {
            const isLocalVideo = video.type === "local" || video.url.startsWith("/") || video.url.match(/\.(mp4|webm|mov)$/i)
            
            return (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-accent/20 border-2 border-accent/30 hover:border-accent transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {isLocalVideo ? (
                  <div className="w-full">
                    <video
                      src={video.url}
                      controls
                      preload="auto"
                      playsInline
                      className="w-full h-auto rounded-xl"
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
                      className="absolute top-0 left-0 w-full h-full border-0 rounded-xl"
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
  )
}
