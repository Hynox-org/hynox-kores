"use client"

import { Play } from "lucide-react"
import { useState } from "react"

const videos = [
  {
    id: 1,
    title: "DTF Printing Process",
    thumbnail: "/dtf-printing-process.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Embroidery Showcase",
    thumbnail: "/embroidery-on-fabric.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Quality Control",
    thumbnail: "/quality-control-fabric.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
]

export default function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            See Our <span className="text-primary">Craftsmanship</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch our production process and quality standards in action
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedVideo(video.id)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={32} className="text-accent-foreground fill-accent-foreground" />
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {video.title}
              </h3>
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
