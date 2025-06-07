"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface VideoPlayerProps {
  /**
   * The URL of the video to play
   * @type {string}
   */
  videoUrl: string
  /**
   * The URL of the thumbnail image to show before video plays
   * @type {string}
   */
  thumbnailUrl: string
  /**
   * Alt text for the thumbnail image
   * @type {string}
   */
  altText: string
  /**
   * Optional className for custom styling
   * @type {string}
   */
  className?: string
}

export default function VideoPlayer({ videoUrl, thumbnailUrl, altText, className = "" }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const controlsTimeoutRef = useRef<NodeJS.Timeout>()

  // Reset video state when videoUrl changes
  useEffect(() => {
    setIsPlaying(false)
    setIsLoading(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [videoUrl])

  // Hide controls after 3 seconds of inactivity
  const handleMouseMove = () => {
    setShowControls(true)
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false)
      }
    }, 3000)
  }

  const toggleVideo = async () => {
    if (!videoRef.current) return

    try {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        setIsLoading(true)
        await videoRef.current.play()
        setIsPlaying(true)
      }
    } catch (error) {
      console.error("Error playing video:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div 
      className={`relative rounded-3xl overflow-hidden border border-bg-primary-20 bg-gradient-to-br from-[#0a192f] to-[#020c1b] ${className}`}
      onClick={toggleVideo}
      onMouseMove={handleMouseMove}
    >
      <div className="relative aspect-video">
        {/* Video Element */}
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full h-full object-cover"
          playsInline
          onEnded={() => setIsPlaying(false)}
        />

        {/* Thumbnail Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0">
            <Image
              src={thumbnailUrl}
              alt={altText}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Controls Overlay - Show play button when not playing, show pause button only when controls are visible */}
        {(!isPlaying || (isPlaying && showControls)) && (
          <>
            {/* Play/Pause Button Overlay */}
            <div className="absolute z-10 inset-0 flex items-center justify-center">
              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleVideo()
                }}
                size="lg"
                className={`${isPlaying ? 'hidden' : 'flex'} w-20 h-20 rounded-full bg-bg-primary-20 backdrop-blur-sm border border-[#00ff8c] text-primary hover:bg-bg-primary-30 hover:scale-110 transition-all duration-300`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="w-8 h-8 animate-spin" />
                ) : (
                  <Play className={`w-8 h-8 ml-1 ${isPlaying ? 'rotate-180' : ''}`} />
                )}
              </Button>
            </div>

            {/* Terminal-style decorative elements */}
            <div className="absolute top-4 left-4 opacity-70">
              <div className="font-mono text-xs text-primary">
                {isPlaying ? "> video.pause()" : "> video.play()"}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
} 