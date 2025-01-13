import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import { LexaraAILogo } from '@/components/lexara-ai-logo'

export function Header() {
  return (
    <header className="border-b border-gray-800">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <LexaraAILogo className="h-8 w-auto text-white" />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/docs" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Documentation
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800">
            <Github className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}

