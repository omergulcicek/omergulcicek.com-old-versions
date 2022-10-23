import { useState, useEffect } from "react"
import Title from "@/components/title"
import fs from "fs"
import matter from "gray-matter"
import Link from "next/link"
import articleTimeAgo from "article-time-ago"

function Blog({ posts }) {
  const [article, setArticle] = useState(posts)
  const [isActive, setIsActive] = useState(false)

  const technicalArticle = posts.filter(
      (e) => e.frontmatter.category === "Yazılım"
    ),
    personelArticle = posts.filter((e) => e.frontmatter.category !== "Yazılım")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Title>Blog</Title>

      <div className="flex flex-col lg:flex-row text-base lg:text-lg lg:leading-9 text-gray-400 mb-12 pt-1 lg:space-x-5">
        <a
          className="cursor-pointer no-underline font-normal"
          onClick={() => {
            setArticle(technicalArticle)
            setIsActive(true)
          }}
        >
          Teknik Makaleler
        </a>

        <a
          className="cursor-pointer no-underline font-normal"
          onClick={() => {
            setArticle(personelArticle)
            setIsActive(true)
          }}
        >
          Kişisel Makaleler
        </a>

        {isActive && (
          <a
            className="cursor-pointer no-underline font-normal"
            onClick={() => {
              setArticle(posts)
              setIsActive(false)
            }}
          >
            Tümünü Göster ({posts.length})
          </a>
        )}
      </div>

      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-10">
        {article.map(({ slug, frontmatter }, index) => (
          <li key={index}>
            <div className="text-sm lg:text-base font-thin mb-1">
              <time dateTime={frontmatter.date}>
                {articleTimeAgo.date(frontmatter.date)}
              </time>{" "}
              • <span>{frontmatter.category}</span>
            </div>
            <Link href={`/blog/${slug}`}>
              <a className="text-base lg:text-xl lg:leading-9 hover:text-green-500 transition no-underline">
                {frontmatter.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Blog

export async function getStaticProps() {
  // Get all our posts

  const files = fs.readdirSync("./posts")

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "")
    const readFile = fs.readFileSync(`./posts/${fileName}/index.md`, "utf-8")
    const { data: frontmatter } = matter(readFile)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort((a, b) =>
        a.frontmatter.date < b.frontmatter.date ? 1 : -1
      ),
    },
  }
}
