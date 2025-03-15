"use client"

import React, { useState } from "react"
import { useTheme } from "next-themes"

export const HoverEffectBackground = ({
  children,
  lightbackground,
  darkbackground
}: {
  children: React.ReactNode
  lightbackground: string
  darkbackground: string
}) => {
  const { resolvedTheme } = useTheme()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      className="flex-1 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ willChange: "transform" }}
    >
      {isHovered && (
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "220px",
            height: "220px",
            top: mousePosition.y - 150,
            left: mousePosition.x - 150,
            background: resolvedTheme === "dark" ? darkbackground : lightbackground,
            filter: "blur(50px)",
            zIndex: 0,
            willChange: "transform, top, left",
          }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  )
}