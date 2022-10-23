import Link from "next/link"
import fs from "fs"
import matter from "gray-matter"
import md from "markdown-it"
import readingTime from "reading-time"

export async function getStaticPaths() {
  // Retrieve all our slugs
  const files = fs.readdirSync("./posts")

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`./posts/${slug}/index.md`, "utf-8")
  const { data: frontmatter, content } = matter(fileName)
  return {
    props: {
      frontmatter,
      content,
    },
  }
}

export default function PostPage({ frontmatter, content }) {
  return (
    <section>
      <div className="xl:mb-10">
        <div className="hidden xl:flex items-center justify-center gap-5 divide-x">
          <Link href="/blog">
            <a className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                height="16"
              >
                <path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z" />
              </svg>

              <span>Tüm Makaleler</span>
            </a>
          </Link>

          <span className="pl-5">
            {new Date(frontmatter.date).toLocaleDateString()}
          </span>

          {frontmatter.medium && (
            <a
              href={frontmatter.medium}
              rel="noopener noreferrer"
              target="_blank"
              className="pl-5"
              title="Bu makaleyi Medium'da okumak için tıklayın."
            >
              Medium'da oku
            </a>
          )}

          <span className="pl-5">
            <span className="text-gray-500">Tahmini Okuma Süresi:</span>{" "}
            {Math.round(readingTime(content).minutes)} dk
          </span>
        </div>
      </div>

      <article className="mx-auto prose prose-neutral prose-img:mx-auto prose-h1:text-4xl prose-h2:text-2xl">
        <h1>{frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: md({
              html: true,
              linkify: true,
              typographer: true,
            }).render(content),
          }}
        />
      </article>
    </section>
  )
}
