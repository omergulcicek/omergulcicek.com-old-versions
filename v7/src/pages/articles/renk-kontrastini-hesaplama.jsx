import ArticleDetail from "@/components/articleDetail"
import { html, attributes } from "@/posts/renk-kontrastini-hesaplama.md"

const Article = () => {
  return (
    <>
      <ArticleDetail {...attributes} html={html} />
    </>
  )
}

export default Article
