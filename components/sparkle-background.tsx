"use client"

/// <reference types="react" />

// Component ngôi sao SVG
function StarIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  )
}

export default function SparkleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Ngôi sao nhỏ lấp lánh - nhiều hơn */}
      {Array.from({ length: 30 }).map((_, index) => (
        <div
          key={`star-small-${index}`}
          className="absolute animate-sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${1.5 + Math.random() * 1.5}s`,
          }}
        >
          <StarIcon size={8 + Math.random() * 4} />
        </div>
      ))}

      {/* Ngôi sao trung bình */}
      {Array.from({ length: 15 }).map((_, index) => (
        <div
          key={`star-medium-${index}`}
          className="absolute animate-sparkle-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
            color: `rgba(212, 165, 116, ${0.5 + Math.random() * 0.3})`,
          }}
        >
          <StarIcon size={12 + Math.random() * 6} />
        </div>
      ))}

      {/* Ngôi sao lớn - lấp lánh mạnh */}
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={`star-large-${index}`}
          className="absolute animate-sparkle-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2.5 + Math.random() * 1.5}s`,
            color: `rgba(212, 165, 116, ${0.6 + Math.random() * 0.4})`,
          }}
        >
          <StarIcon size={18 + Math.random() * 10} />
        </div>
      ))}

      {/* Ngôi sao bay lượn */}
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={`star-drift-${index}`}
          className="absolute animate-sparkle-drift"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 2}s`,
            color: `rgba(212, 165, 116, ${0.4 + Math.random() * 0.3})`,
          }}
        >
          <StarIcon size={10 + Math.random() * 8} />
        </div>
      ))}

      {/* Tia sáng từ ngôi sao */}
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={`star-ray-${index}`}
          className="absolute animate-sparkle-ray"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${1 + Math.random() * 1}s`,
          }}
        >
          <div
            className="w-px h-16 bg-gradient-to-b from-accent/60 via-accent/30 to-transparent"
            style={{
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          ></div>
        </div>
      ))}
    </div>
  )
}
