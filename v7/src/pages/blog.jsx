import { useEffect } from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { Link } from "react-router-dom"
import articleTimeAgo from "article-time-ago"
import Title from "@/components/title"
import data from "@/assets/data/blog.json"

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section>
        <HelmetProvider>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Blog | @omergulcicek</title>
            <meta name="description" content="Blog | Ömer Gülçiçek" />
          </Helmet>
        </HelmetProvider>

        <Title>Blog</Title>

        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-10">
          {[...data.items]
            .reverse()
            .map(({ title, link, date, category }, index) => (
              <li key={index} className="flex flex-col items-start gap-1">
                <div className="text-lg font-thin">
                  <time dateTime={date}>{articleTimeAgo.date(date)}</time> •{" "}
                  <span>{category}</span>
                </div>
                <Link
                  to={`/blog/${link}`}
                  className="text-lg md:text-xl hover:text-theme-color transition"
                >
                  {title}
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </>
  )
}

export default Blog
