import Title from "../../../components/Title"

export default function Page() {
  return (
    <section className="max-w-[1480px] mx-auto px-4">
      <Title>UI Kit</Title>

      <div className="bg-red-500">
        Sitede kullanılan renk ve font ayarları, tutarlılık
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="bg-white text-black border border-neutral-100 rounded-xl h-40 w-1/6 flex flex-col items-start justify-end p-4">
          <span>#FFFFFF</span>
          <span>white</span>
        </div>

        <div className="bg-neutral-100 text-black border border-neutral-100 rounded-xl h-40 w-1/6 flex flex-col items-start justify-end p-4">
          <span>#F5F5F5</span>
          <span>neutral-100</span>
        </div>

        <div className="bg-neutral-200 text-black border border-neutral-200 rounded-xl h-40 w-1/6 flex flex-col items-start justify-end p-4">
          <span>#E5E5E5</span>
          <span>neutral-200</span>
        </div>

        <div className="bg-neutral-900 text-white border border-neutral-900 rounded-xl h-40 w-1/6 flex flex-col items-start justify-end p-4">
          <span>#171717</span>
          <span>neutral-900</span>
        </div>

        <div className="bg-black text-white border border-black rounded-xl h-40 w-1/6 flex flex-col items-start justify-end p-4">
          <span>#000000</span>
          <span>black</span>
        </div>
      </div>
    </section>
  )
}
