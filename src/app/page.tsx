import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="h-[100vh] p-4 flex flex-col items-center justify-center">
      <Image
        aria-hidden
        src="/rangoon-academy.gif"
        alt="Rangoon Academy"
        width={250}
        height={250}
      />
      <Alert className="w-60">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>We&apos;re coming soon.</AlertDescription>
      </Alert>
    </main>
  )
}
