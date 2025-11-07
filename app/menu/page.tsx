"use client"

import Header from "@/components/header"
import MenuSection from "@/components/menu-section"
import Footer from "@/components/footer"

export default function MenuPage() {
  return (
    <main className="w-full">
      <Header />
      <section id="menu">
        <MenuSection />
      </section>
      <Footer />
    </main>
  )
}



