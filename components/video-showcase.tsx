"use client"

import { Play } from "lucide-react"
import React, { useRef, useEffect, useState } from "react"

const videos = [
  {
    id: 1,
    title: "DTF Printing Process",
    videoUrl: "https://rtmqswlnfatawucbokkb.supabase.co/storage/v1/object/public/kores/IMG_4540.MP4",
  },
  {
    id: 2,
    title: "Embroidery Showcase",
    videoUrl: "https://rtmqswlnfatawucbokkb.supabase.co/storage/v1/object/public/kores/IMG_4542.MP4",
  },
  {
    id: 3,
    title: "Quality Control",
    videoUrl: "https://rtmqswlnfatawucbokkb.supabase.co/storage/v1/object/public/kores/IMG_4546.MP4",
  },
  {
    id: 4,
    title: "Quality Control",
    videoUrl: "https://rtmqswlnfatawucbokkb.supabase.co/storage/v1/object/public/kores/IMG_4549.MP4",
  },
  {
    id: 5,
    title: "Quality Control",
    videoUrl: "https://rtmqswlnfatawucbokkb.supabase.co/storage/v1/object/public/kores/IMG_4532.MP4",
  },
  {
    id: 6,
    title: "Quality Control",
    videoUrl: "https://rtmqswlnfatawucbokkb.supabase.co/storage/v1/object/public/kores/IMG_4578.MP4",
  },
]

export default function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollSpeed = 1 // Adjust scroll speed as needed
    const scrollInterval = 50 // Milliseconds per scroll step

    const autoScroll = setInterval(() => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft = 0 // Reset to beginning
      } else {
        scrollContainer.scrollLeft += scrollSpeed
      }
    }, scrollInterval)

    return () => clearInterval(autoScroll)
  }, [])

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            See Our <span className="text-primary">Reels</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch our production process and quality standards in action
          </p>
        </div>

        <div className="flex overflow-x-auto gap-6 py-4 scrollbar-hide scrollbar-width-0 [-ms-overflow-style:none]" ref={scrollRef}>
          {videos.map((video, index) => (
            <div
              key={video.id}
              
              className="flex-none w-48 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedVideo(video.id)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <video
                  src={video.videoUrl}
                  title={video.title}
                  loop
                  muted
                  autoPlay
                  playsInline
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fade-in-up">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-10 right-0 text-white hover:text-accent transition-colors"
              >
                ✕
              </button>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={videos.find((v) => v.id === selectedVideo)?.videoUrl}
                  title="Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
