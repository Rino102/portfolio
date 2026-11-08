import { WORKS_WITH } from "@/data/resume"
import { Chip } from "@/components/ui/Chip"

export function WorksWith() {
  return (
    <section aria-label="Methods and tools" className="border-y border-[#dad8cf] bg-white">
      <div className="wrap flex flex-wrap items-center gap-x-5 gap-y-3 py-6">
        <span className="mono mr-2">Works with</span>
        {WORKS_WITH.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>
    </section>
  )
}
