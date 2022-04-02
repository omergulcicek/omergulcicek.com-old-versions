import { useEffect } from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { Link } from "react-router-dom"
import Title from "@/components/title"
import Prism from "prismjs"
import "prismjs/themes/prism-okaidia.min.css"

const ArticleDetail = ({ html = "", ...attributes }) => {
  const { title, date, medium } = attributes

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title} | @omergulcicek</title>
          <meta name="description" content={`${title} | Ömer Gülçiçek`} />
        </Helmet>
      </HelmetProvider>

      <section>
        <article>
          <div className="articleDetails flex gap-3 justify-center md:justify-start mb-14 md:mb-5">
            <Link
              to={"/blog"}
              className="flex items-center gap-2 underline underline-offset-2 hover:text-theme-color hover:fill-theme-color transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                height={16}
                className="currentColor"
              >
                <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
              </svg>
              Tüm Yazılar
            </Link>

            <span>•</span>

            <span>
              {new Date(date).toLocaleDateString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>

            <span>•</span>

            <span title="Tahmini Okuma Süresi">
              {Math.round(html.split(" ").length / 150)} dk
            </span>

            {medium && <span>•</span>}

            {medium && (
              <a
                href={medium}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-theme-color transition"
              >
                Medium'da Oku
              </a>
            )}
          </div>

          <Title>{title}</Title>

          <div
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          ></div>
        </article>
      </section>
    </>
  )
}

export default ArticleDetail
