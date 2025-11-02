"use client"

import type React from "react"

import { useState } from "react"
import SparkleBackground from "@/components/sparkle-background"

interface ImageUploadSectionProps {
  images: string[]
  setImages: (images: string[]) => void
}

export default function ImageUploadSection({ images, setImages }: ImageUploadSectionProps) {
  const [imageUrl, setImageUrl] = useState("")

  const handleAddImage = () => {
    if (imageUrl.trim()) {
      setImages([...images, imageUrl])
      setImageUrl("")
    }
  }

  const handleDeleteImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader()
        reader.onload = (event) => {
          if (event.target?.result) {
            setImages([...images, event.target.result as string])
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  return (
    <section className="py-20 bg-primary/5 relative overflow-hidden">
      <SparkleBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Thư Viện Ảnh</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Xem hình ảnh sản phẩm, quá trình chế biến và những sản phẩm đã bán
          </p>
        </div>

        {/* Upload Section */}
        <div className="bg-card border-2 border-dashed border-primary/30 rounded-xl p-8 mb-12">
          <h3 className="text-xl font-bold text-primary mb-6">Thêm Hình Ảnh Mới</h3>

          <div className="space-y-4">
            {/* File Upload */}
            <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-primary/30 rounded-lg hover:bg-primary/5 transition cursor-pointer">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer text-center">
                <svg
                  className="w-12 h-12 mx-auto mb-2 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <p className="text-primary font-semibold">Chọn ảnh từ máy tính</p>
                <p className="text-sm text-muted-foreground">hoặc kéo thả ảnh vào đây</p>
              </label>
            </div>

            {/* Or URL Input */}
            <div className="flex gap-2">
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Hoặc dán URL ảnh..."
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              />
              <button
                onClick={handleAddImage}
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition"
              >
                Thêm
              </button>
            </div>
          </div>
        </div>

        {/* Images Grid */}
        {images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg border border-border">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => handleDeleteImage(index)}
                    className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition font-semibold"
                  >
                    Xóa ảnh
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-card rounded-xl border border-border">
            <svg
              className="w-16 h-16 mx-auto mb-4 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-muted-foreground text-lg">Chưa có hình ảnh nào. Thêm hình ảnh đầu tiên của bạn!</p>
          </div>
        )}
      </div>
    </section>
  )
}
