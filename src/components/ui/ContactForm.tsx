"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { contactSchema, type ContactFormValues } from "@/lib/validations"
import { Button } from "@/components/ui/Button"
import { scaleIn } from "@/hooks/useAnimationVariants"

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
      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        className="glass flex flex-col items-center justify-center gap-4 rounded-2xl p-10 text-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15">
          <CheckCircle className="h-8 w-8 text-emerald-400" />
        </div>
        <h3 className="text-xl font-bold text-navy">Message Sent!</h3>
        <p className="text-sm text-slate-600 max-w-xs">
          Thank you for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setFormState("idle")}
          className="text-xs text-teal-600 hover:text-teal-500 transition-colors mt-2"
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  const inputClasses =
    "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-navy placeholder-slate-400 outline-none transition-all focus:border-teal-500/60 focus:bg-teal-500/5 focus:ring-1 focus:ring-teal-500/40"

  const labelClasses = "block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5"

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClasses}>Name</label>
          <input
            {...register("name")}
            placeholder="Your name"
            className={inputClasses}
            autoComplete="name"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-rose-400">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className={labelClasses}>Email</label>
          <input
            {...register("email")}
            type="email"
            placeholder="your@email.com"
            className={inputClasses}
            autoComplete="email"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-rose-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className={labelClasses}>Subject</label>
        <input
          {...register("subject")}
          placeholder="How can I help you?"
          className={inputClasses}
        />
        {errors.subject && (
          <p className="mt-1 text-xs text-rose-400">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label className={labelClasses}>Message</label>
        <textarea
          {...register("message")}
          placeholder="Tell me about your project or opportunity..."
          rows={5}
          className={`${inputClasses} resize-none`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-rose-400">{errors.message.message}</p>
        )}
      </div>

      <AnimatePresence>
        {formState === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 rounded-lg border border-rose-500/20 bg-rose-500/8 px-4 py-3"
          >
            <AlertCircle className="h-4 w-4 text-rose-400 flex-shrink-0" />
            <p className="text-xs text-rose-400">{errorMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        type="submit"
        loading={formState === "loading"}
        size="lg"
        className="w-full"
      >
        <Send className="h-4 w-4" />
        Send Message
      </Button>
    </form>
  )
}
