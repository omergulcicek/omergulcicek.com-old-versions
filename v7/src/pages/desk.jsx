import { useEffect } from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"
import Title from "@/components/title"
import data from "@assets/data/desk.json"

const Desk = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Çalışma Masam | @omergulcicek</title>
          <meta name="description" content="Çalışma Masam | Ömer Gülçiçek" />
        </Helmet>
      </HelmetProvider>

      <section>
        <Title>Çalışma Masam</Title>

        <div className="bg-theme-color p-20 mb-20 h-96"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data.items.map(({ title, description, img }, i) => (
            <div key={i}>
              <figure className="flex flex-col  items-start justify-center">
                <img
                  src={`src/assets/img/desk/${img}.png`}
                  alt={`${title} - ${description}`}
                  className="m-auto"
                  height={240}
                  width={240}
                />

                <figcaption className="flex flex-col w-full text-center mt-5">
                  <strong className="text-xl font-normal">{title}</strong>
                  <span className="text-md font-thin mt-1">{description}</span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Desk
