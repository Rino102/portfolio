"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AlertCircle, CheckCircle } from "lucide-react"
import { contactSchema, type ContactFormValues } from "@/lib/validations"
import { Button } from "@/components/ui/Button"

type FormState = "idle" | "loading" | "success" | "error"

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) })

  const onSubmit = async (data: ContactFormValues) => {
    setFormState("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error((body as { error?: string }).error ?? "Something went wrong")
      }
      setFormState("success")
      reset()
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Failed to send message")
      setFormState("error")
    }
  }

  if (formState === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-[20px] border border-[#2a3548] bg-[#16202f] p-8">
        <CheckCircle className="text-saffron h-9 w-9" aria-hidden="true" />
        <p className="disp text-paper text-[22px] font-semibold">Message sent.</p>
        <p className="text-on-ink text-[15px]">I&apos;ll respond within 24 hours.</p>
        <button
          type="button"
          onClick={() => setFormState("idle")}
          className="focus-ring mono text-saffron mt-2 cursor-pointer bg-transparent"
        >
          Send another →
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <div
        className="grid gap-5"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))" }}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="f-name" className="mono text-on-ink">
            Name
          </label>
          <input
            id="f-name"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            className="field"
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? "f-name-error" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <p id="f-name-error" className="mono text-[11px] text-[#ff9c86]">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="f-email" className="mono text-on-ink">
            Email
          </label>
          <input
            id="f-email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            className="field"
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? "f-email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="f-email-error" className="mono text-[11px] text-[#ff9c86]">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="f-sub" className="mono text-on-ink">
          Subject
        </label>
        <input
          id="f-sub"
          type="text"
          placeholder="What is this about?"
          className="field"
          aria-invalid={errors.subject ? "true" : undefined}
          aria-describedby={errors.subject ? "f-sub-error" : undefined}
          {...register("subject")}
        />
        {errors.subject && (
          <p id="f-sub-error" className="mono text-[11px] text-[#ff9c86]">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="f-msg" className="mono text-on-ink">
          Message
        </label>
        <textarea
          id="f-msg"
          rows={5}
          placeholder="Tell me about the project, timeline and team."
          className="field resize-y"
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "f-msg-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="f-msg-error" className="mono text-[11px] text-[#ff9c86]">
            {errors.message.message}
          </p>
        )}
      </div>

      {formState === "error" && (
        <div
          role="alert"
          className="flex items-center gap-2 rounded-xl border border-[#8a3a2a] bg-[#2a1a16] px-4 py-3"
        >
          <AlertCircle className="h-4 w-4 flex-shrink-0 text-[#ff9c86]" aria-hidden="true" />
          <p className="mono text-[11px] text-[#ff9c86]">{errorMessage}</p>
        </div>
      )}

      <Button type="submit" variant="saffron" loading={formState === "loading"}>
        Send message →
      </Button>
    </form>
  )
}
