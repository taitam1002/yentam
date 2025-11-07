"use client"

import Header from "@/components/header"
import GallerySection from "@/components/gallery-section"
import Footer from "@/components/footer"

export default function ProductsPage() {
  return (
    <main className="w-full">
      <Header />
      <section id="gallery">
        <GallerySection />
      </section>
      <Footer />
    </main>
  )
}



