"use client"

import Header from "@/components/header"
import BenefitsSection from "@/components/benefits-section"
import Footer from "@/components/footer"

export default function BenefitsPage() {
  return (
    <main className="w-full">
      <Header />
      <section id="benefits">
        <BenefitsSection />
      </section>
      <Footer />
    </main>
  )
}



