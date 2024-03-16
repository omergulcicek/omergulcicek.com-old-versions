import Title from "../../components/Title"
import data from "../../public/destinations.json"

export default function Page() {
  return (
    <>
      <section>
        <Title>Seyahat</Title>

        <div className="bg-red-500 mb-5">
          gezi grupları, instagramdan iletişim
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map(({ title, years, slug }) => (
            <figure
              className={`relative overflow-hidden ${
                !years ? "opacity-50" : ""
              }`}
              key={title}
            >
              <img src={slug} alt="" className="rounded-xl" />

              <figcaption className="absolute bottom-0 left-12 z-10 font-black text-white drop-shadow-md text-5xl -rotate-90 origin-left hidden">
                {title}
              </figcaption>

              <span className="absolute top-4 right-4 font-normal text-white drop-shadow-md text-xl">
                {years}
              </span>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}
