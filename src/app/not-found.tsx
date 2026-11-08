import { ButtonLink } from "@/components/ui/Button"
import { Monogram } from "@/components/layout/Monogram"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <Monogram size={56} />
      <p className="disp text-cobalt text-6xl font-bold">404</p>
      <h1 className="disp text-ink text-2xl font-semibold">Page not found</h1>
      <p className="text-muted max-w-sm text-base leading-relaxed">
        That page doesn&apos;t exist. The work, the experience and the contact form are all on the
        home page.
      </p>
      <ButtonLink href="/">Back to home</ButtonLink>
    </div>
  )
}
