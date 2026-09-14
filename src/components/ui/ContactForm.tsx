"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { contactSchema, type ContactFormValues } from "@/lib/validations"
import { Button } from "@/components/ui/Button"

type FormState = "idle" | "loading" | "success" | "error"

interface ContactFormProps {
  dark?: boolean
}

export function ContactForm({ dark = false }: ContactFormProps) {
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

  const textColor   = dark ? "#f7f2e8" : "#1c1410"
  const labelColor  = dark ? "rgba(247,242,232,.42)" : "rgba(28,20,16,.50)"
  const errColor    = "#c0392b"

  const inputClass = dark ? "form-input form-input-dark" : "form-input form-input-light"

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: ".14em",
    textTransform: "uppercase",
    color: labelColor,
    display: "block",
    marginBottom: 6,
  }

  if (formState === "success") {
    return (
      <div style={{ paddingTop: 40, paddingBottom: 40, textAlign: "center" }}>
        <CheckCircle
          style={{
            color: "#1f7a4d",
            width: 36,
            height: 36,
            margin: "0 auto 16px",
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 20,
            color: textColor,
            marginBottom: 8,
          }}
        >
          Message sent.
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 14,
            fontWeight: 300,
            color: labelColor,
          }}
        >
          I&apos;ll respond within 24 hours.
        </p>
        <button
          onClick={() => setFormState("idle")}
          style={{
            marginTop: 16,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "#7a2a1e",
            background: "none",
            border: "none",
            cursor: "pointer",
            letterSpacing: ".08em",
          }}
        >
          Send another →
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label style={labelStyle}>Name</label>
          <input
            {...register("name")}
            placeholder="Your name"
            className={inputClass}
            autoComplete="name"
          />
          {errors.name && (
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: errColor, marginTop: 4 }}>
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input
            {...register("email")}
            type="email"
            placeholder="your@email.com"
            className={inputClass}
            autoComplete="email"
          />
          {errors.email && (
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: errColor, marginTop: 4 }}>
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label style={labelStyle}>Subject</label>
        <input
          {...register("subject")}
          placeholder="How can I help you?"
          className={inputClass}
        />
        {errors.subject && (
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: errColor, marginTop: 4 }}>
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label style={labelStyle}>Message</label>
        <textarea
          {...register("message")}
          placeholder="Tell me about your project..."
          rows={4}
          className={`${inputClass} resize-none`}
        />
        {errors.message && (
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: errColor, marginTop: 4 }}>
            {errors.message.message}
          </p>
        )}
      </div>

      {formState === "error" && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 14px",
            border: "1px solid rgba(192,57,43,.30)",
            backgroundColor: "rgba(192,57,43,.08)",
          }}
        >
          <AlertCircle style={{ width: 14, height: 14, color: errColor, flexShrink: 0 }} />
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: errColor }}>
            {errorMessage}
          </p>
        </div>
      )}

      <Button type="submit" loading={formState === "loading"} className="w-full justify-center">
        <Send className="h-4 w-4" />
        Send Message
      </Button>
    </form>
  )
}
