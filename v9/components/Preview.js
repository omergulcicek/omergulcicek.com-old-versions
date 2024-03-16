import Link from "next/link"

export default function Preview({ className }) {
  return (
    <>
      <section className={`${className ? className : ""}`}>
        <div className="lg:-mx-[240px] flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          <figure className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
            <img src="https://picsum.photos/900/1600?random=1" alt="" />
          </figure>

          <figure className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
            <img src="https://picsum.photos/900/1600?random=2" alt="" />
          </figure>

          <figure className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2 hidden lg:flex">
            <img src="https://picsum.photos/900/1600?random=3" alt="" />
          </figure>

          <figure className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2 hidden lg:flex">
            <img src="https://picsum.photos/900/1600?random=4" alt="" />
          </figure>

          <figure className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2 hidden lg:flex">
            <img src="https://picsum.photos/900/1600?random=5" alt="" />
          </figure>
        </div>
      </section>
    </>
  )
}
