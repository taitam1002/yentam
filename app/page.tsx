"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import OriginStory from "@/components/origin-story"
import ProcessStory from "@/components/process-story"
import ValuesStory from "@/components/values-story"
import CommitmentStory from "@/components/commitment-story"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <OriginStory />
      <ProcessStory />
      <ValuesStory />
      <CommitmentStory />
      <Footer />
    </main>
  )
}
