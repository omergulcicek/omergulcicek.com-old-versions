import { useEffect } from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"
import Title from "@/components/title"
import data from "@/assets/data/projects.json"

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Projelerim | @omergulcicek</title>
          <meta name="description" content="Projelerim | Ömer Gülçiçek" />
        </Helmet>
      </HelmetProvider>

      <section>
        <Title>Projelerim</Title>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {data.items.map(({ title, description, link, category }, index) => (
            <div key={index} className="flex gap-5">
              <span className="flex items-center justify-center text-5xl font-thin tabular-nums w-20">
                {index + 1}
              </span>

              <div className="flex flex-col items-start">
                <span className="text-sm font-bold text-theme-color uppercase mb-2">
                  {category}
                </span>

                <h2 className="text-4xl	font-bold mb-4">{title}</h2>

                <p className="text-lg font-thin mb-3">{description}</p>

                <a
                  href={link}
                  title={title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-theme-color hover:underline underline-offset-2"
                >
                  <span>Projeyi İncele</span>

                  <svg width="14" height="10" className="transition">
                    <g stroke="currentColor" fill="none" fillRule="evenodd">
                      <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                      <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          ))}

          <div className="flex gap-5">
            <span className="text-5xl font-bold w-20">...</span>

            <div className="flex flex-col items-start">
              <h2 className="text-4xl	font-bold mb-4">Tümünü Gör</h2>
              <p className="text-lg font-thin mb-3">
                Tüm açık kaynak projelerimi incele
              </p>
              <a
                href="https://github.com/omergulcicek/"
                title="GitHub'ta İncele"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-theme-color hover:underline underline-offset-2"
              >
                <span>GitHub</span>

                <svg width="14" height="10" className="transition">
                  <g stroke="currentColor" fill="none" fillRule="evenodd">
                    <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                    <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
