import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight, Wand2 } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container px-4 py-12 md:py-24">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white font-next">
                LexaraAI Video Summarizer
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Get concise, accurate summaries of YouTube videos in seconds. Powered by AI.
              </p>
            </div>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Enter Video URL</CardTitle>
                <CardDescription className="text-gray-400">
                  Paste a YouTube video URL to get started
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input placeholder="https://youtube.com/watch?v=" className="bg-gray-800 border-gray-700 text-white" />
                  <Button variant="secondary">
                    Summarize
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  Summary
                  <Wand2 className="h-4 w-4" />
                </CardTitle>
                <CardDescription className="text-gray-400">
                  AI-generated summary of the video content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea 
                  placeholder="Your video summary will appear here..."
                  className="min-h-[200px] resize-none bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                  readOnly
                />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-800 py-6">
        <div className="container px-4 text-center text-sm text-gray-500">
          Powered by LexaraAI
        </div>
      </footer>
    </div>
  )
}

