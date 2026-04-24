import { Button } from "@/components/ui/Button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-6xl font-black text-indigo-500">404</p>
      <h1 className="text-2xl font-bold text-white">Page Not Found</h1>
      <p className="text-slate-400 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Button href="/">Go Home</Button>
    </div>
  )
}
