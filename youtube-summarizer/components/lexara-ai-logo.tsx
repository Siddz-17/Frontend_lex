import React from 'react'

export function LexaraAILogo({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 25 L30 10 L50 25 L30 40 Z" />
      <circle cx="70" cy="25" r="15" />
      <text
        x="100"
        y="35"
        fontFamily="var(--font-next)"
        fontSize="24"
        fill="currentColor"
      >
        LexaraAI
      </text>
    </svg>
  )
}

