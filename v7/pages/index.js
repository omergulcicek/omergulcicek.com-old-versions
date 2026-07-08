import Hero from "@/components/hero"
import Social from "@/components/social"
import Slider from "@/components/slider"

function Home() {
  return (
    <>
      <section className="xl:flex xl:gap-12 flex flex-col-reverse text-center lg:text-left gap-8 lg:flex-row lg:gap-6">
        <Slider className="lg:w-[400px]" />

        <div>
          <Hero />
          <Social />
        </div>
      </section>
    </>
  )
}

export default Home
