import { useEffect } from "react"
import Title from "@/components/title"
import Subtitle from "@/components/subtitle"
import data from "@/public/data/desk.json"

const Desk = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section>
        <Title>Çalışma Masası</Title>

        <div className="bg-green-500 p-20 mt-10 mb-20 h-96" hidden></div>

        <Subtitle>Kullandığım Ekipmanlar</Subtitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-16 mt-10">
          {data.items.map(({ title, description, img }, i) => (
            <div key={i}>
              <figure className="flex flex-col  items-start justify-center">
                <img
                  src={`/img/desk/${img}.png`}
                  alt={`${title} - ${description}`}
                  className="m-auto"
                  height={240}
                  width={240}
                />

                <figcaption className="flex flex-col w-full text-center mt-5">
                  <strong
                    className="text-base lg:text-xl lg:leading-9 font-normal"
                    dangerouslySetInnerHTML={{ __html: title }}
                  ></strong>
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

export default Desk
