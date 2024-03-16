import Title from "../../../components/Title"
import data from "../../../public/desk.json"

export default function Page() {
  return (
    <>
      <section>
        <Title>Çalışma Masam</Title>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
          {data.map(({ title, description, img }, i) => (
            <div
              key={i}
              className="py-6 rounded shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
            >
              <figure className="flex flex-col  items-start justify-center">
                <img
                  src={`/img/desk/${img}.png`}
                  alt={`${title} - ${description}`}
                  className="m-auto px-4"
                  height={240}
                  width={240}
                />

                <figcaption className="flex flex-col w-full text-center mt-5">
                  <strong className="text-base lg:text-xl lg:leading-9 font-normal">
                    {title}
                  </strong>
                  <span className="text-sm lg:text-base font-extralight	 mt-1">
                    {description}
                  </span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
