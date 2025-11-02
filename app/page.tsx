"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import BenefitsSection from "@/components/benefits-section"
import MenuSection from "@/components/menu-section"
import GallerySection from "@/components/gallery-section"
import VideoUploadSection from "@/components/video-upload-section"
import Footer from "@/components/footer"

interface VideoItem {
  url: string
  title: string
  type?: "local" | "url"
}

export default function Home() {
  const [videos, setVideos] = useState<VideoItem[]>([
    { url: "/qc-yen_tam.mp4", title: "Video Giới Thiệu Yến Tâm", type: "local" }
  ])

  return (
    <main className="w-full">
      <Header />
      <Hero />
      <BenefitsSection />
      <MenuSection />
      <GallerySection />
      <VideoUploadSection videos={videos} setVideos={setVideos} />
      <Footer />
    </main>
  )
}
