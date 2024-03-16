import fs from "fs"
import matter from "gray-matter"
import Link from "next/link"

import Title from "../../components/Title"

export default async function Page() {
  const data = await getData()

  return (
    <>
      <Title>Blog</Title>

      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-10">
        {data.map(({ slug, frontmatter }, index) => (
          <li key={index}>
            <div className="text-sm font-thin mb-1 text-zinc-500 dark:text-zinc-500">
              <time dateTime={frontmatter.date}>{frontmatter.date}</time> •{" "}
              <span>{frontmatter.category}</span>
            </div>
            <Link
              href={`/blog/${slug}`}
              className="relative text-zinc-800 dark:text-zinc-200 flex items-center text-base transition hover:text-blue-500 dark:hover:text-blue-400 "
            >
              {frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

async function getData() {
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

  const res = posts.sort((a, b) =>
    a.frontmatter.date < b.frontmatter.date ? 1 : -1
  )

  // if (!res.ok) {
  //   throw new Error("Failed to fetch data")
  // }

  return res
}
