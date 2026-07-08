import { useEffect } from "react"
import Title from "@/components/title"
import Tilt from "react-parallax-tilt"
import data from "@/public/data/projects.json"

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section>
        <Title>Projeler</Title>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 mt-20">
          {data.items.map(({ title, description, link, category }, index) => (
            <Tilt
              key={index}
              className="flex gap-5"
              tiltEnable={
                typeof window !== "undefined" && window.innerWidth >= 1024
                  ? true
                  : false
              }
            >
              <span className="hidden md:flex items-center justify-center text-5xl font-extralight	 tabular-nums w-14">
                {index !== data.items.length - 1 ? index + 1 : "..."}
              </span>

              <div className="flex flex-col items-start">
                <span className="text-sm lg:text-base text-gray-600 lowercase mb-1 md:mb-2">
                  {category}
                </span>

                <h2 className="text-2xl font-bold mb-2">{title}</h2>

                <p className="mb-2">{description}</p>

                <a
                  href={link}
                  title={title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-green-100 text-green-700 rounded p-3 no-underline"
                >
                  <span>İncele</span>

                  <svg width="14" height="10" className="transition">
                    <g stroke="currentColor" fill="none" fillRule="evenodd">
                      <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                      <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                    </g>
                  </svg>
                </a>
              </div>
            </Tilt>
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects
